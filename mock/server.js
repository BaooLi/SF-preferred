let express=require("express");
let app=express();
let fs=require("fs");
let uuid=require("uuid");// 唯一字符串
let bodyParser=require("body-parser");//读取请求体里面的数据
let post=8000;//端口号
let session=require("express-session"); //session

let crpyto=require("crypto");//加密

let retrievData=require("./retrievData/index"); //获取数据执行的函数

let commoditySort=require("./commoditySort/index");//商品排序

app.set('view engine','ejs')

//指定模板位置
app.set('views', __dirname + '/views');

app.get("/baiduMap", function(req, res) {
    res.render('home.ejs', {});
});


let read=(url,cb)=>{
    fs.readFile(url,"utf-8",(err,data)=>{
        if(err||data.length===0) return cb([]);
        cb(JSON.parse(data))
    });
}; //读数据方法
let write=(url,data,cb)=>{
    fs.writeFile(url,JSON.stringify(data),cb)
}; //写数据方法

app.use(session({
        resave:true,
        saveUninitialized:true,
        secret:"six"
    }));

// let jsonParser = bodyParser.json();//获取  JSON 编码的请求体
// let urlencodedParser = bodyParser.urlencoded({ extended: false });//获取 URL编码的请求体

let homeDatas=require("./data/Static/swiper");//轮播数据+导航(10条)+会员+秒杀

let hotSearch=require("./data/Static/hotSearch");//热门搜索数据

let listDatas=require("./data/Static/list"); //获取列表分类数据

app.use(bodyParser.json());

//跨域响应头
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    //服务器允许客户发送的请求方式
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT");
    //服务器允许的请求头
    res.header("Access-Control-Allow-Headers","Content-Type,Accept");
    //允许客户端把cookie发送过来
    res.header("Access-Control-Allow-Credentials","true");
    //如果请求的方法是OPTIONS  那就意味着客户端只要响应头,直接结束响应
    if(req.method=="OPTIONS"){
        res.end();
    }else{
        next();
    }
});
//所有请求 success成功1 失败0
//首页
///home/carousel  轮播数据+导航(10条)+会员+秒杀
app.get("/home/carousel",(req,res)=>{
    Object.keys(homeDatas).length>0?res.send({homeDatas,code:0,success:"获取数据成功"}):res.send({code:1,error:"获取数据失败,检查接口"});
});
//给评论加id
let getComment=(res,data,next)=>{
    read("./data/Content/comment.json",comment=>{
        if(!comment[comment.length-1].commentID){
            comment.forEach((item,index)=>item.commentID=data[index].recommendID);
            write("./data/Content/comment.json",comment,()=>{
                res.comment=comment;
                next();
            })
        }else {
            res.comment=comment;
            next();
        }
    });
};
//获取列表数据 并且加上id属性
app.use("/public",(req,res,next)=>{
    read("./data/Content/mainData.json",data=>{
        if(!data[data.length-1].recommendID){
           data.forEach((item,index)=>item.recommendID=uuid.v4());
            write("./data/Content/mainData.json",data,()=>{
                getComment(res,data,next);
                res.data=data;
           })
       }else {
            res.data=data;
            getComment(res,data,next);
       }
    });
});
///home/recommend  推荐  分类页  内容 recommend , 判断条件 flag 请求参数offset
app.get("/public/recommend",(req,res)=>{
    retrievData(req,res,res.data)
});

// list 列表页面

app.get("/list",(req,res)=>{
    listDatas.length>0?res.send({code:0,success:"成功获取列表页数据",listDatas}): res.send({code:1,error:"获取数据失败"})
});

// 商品详情页 details   该商品details 类似similar  评论comment
app.get("/public/details",(req,res)=>{
      let id=req.query.id;
      let details=res.data.find(item=>item.recommendID===id);
          if(details){
              let similar=res.data.filter(item=>item.classification===details.classification).slice(0,6);
              let comment=res.comment.find(item=>item.commentID===id);
              res.send({code:0,details,similar,comment,success:"成功获取数据"})
          }else {
              res.send({code:1,err:"输入的参数有误"})
          }
});


//点击 classification  每个分类 classification 传参 关键字 keyWords   排序
app.get("/public/classification",(req,res)=>{
    let keyWord=req.query.keyWord||"";
    let type=req.query.type;
    if(keyWord.length>0){
        let classifications=res.data.filter(item=>item.classification===keyWord);
        type?classifications=commoditySort(classifications,type):null;
        res.send({code:0,classifications,success:"成功获取分类页数据"});
    }else {
        res.send({code:1,err:"访问错误请检查路径参数"});
    }
});



//搜索 search    传参 关键字 keyWords 排序
app.get("/public/search",(req,res)=>{
    let keyWord=req.query.keyWord||"";
    let type=req.query.type;
    keyWord&&read("./data/Content/historical.json",historical=>{
        let flag =historical.some(item=>item==keyWord);
        if(!flag){
            historical=[...historical,keyWord];
            write("./data/Content/historical.json",historical,()=>{
                console.log("写入成功");
            })
        }
    });
    if(keyWord.length>0){
           let searchs=res.data.filter(item=>item.recommendTitle.includes(keyWord))||[];
               type?searchs=commoditySort(searchs,type):null;
               searchs.length>0? res.send({code:0,success:"成功获取搜索数据",searchs}):  res.send({code:1,error:"抱歉,您搜索的商品未找到!"});
       }else {
        res.send({code:1,error:"抱歉,您搜索的商品未找到!"});
    }
});

//public/cart 添加购物车    修改数量
app.post("/public/cart",(req,res)=>{
    if (!req.body) return res.sendStatus(400);
    let {userName,recommendID,count}=req.body;
    let ss=res.data.find(item=>item.recommendID==recommendID); //商品
    read("./data/Content/userCommodity.json",userCommodities=>{
        if(userCommodities.length==0){
            ss.count=count;//加属性 数量
            let aa={userName,list:[ss]}; //[{用户id, list:[{}{}]}]
            userCommodities.push(aa)
        }else {
            let fff=userCommodities.some(item=>item.userName==userName);
            if(fff){
                userCommodities.forEach(item=>{
                    let flag=item.list.some(dd=>dd.recommendID==ss.recommendID);
                    if(flag){
                        item.list.map(dd=>{
                            if(dd.recommendID==ss.recommendID&&item.userName==userName){
                                dd.count=count;
                                return dd;
                            }else {
                                return item.list
                            }
                        })
                    }else {
                        ss.count=count;
                        item.list.push(ss);
                    }
                })
            }else {
                ss.count=count;
                let aa={userName,list:[]};
                aa.list.push(ss);
                userCommodities=[...userCommodities,aa]
            }
        }
        write("./data/Content/userCommodity.json",userCommodities,()=>{
            res.send({code:0,success:"写入完成"})
        })
    });
});
//删除购物车
app.post("/removeCart",(req,res)=>{
    if (!req.body) return res.sendStatus(400);
    let {userName,recommendID}=req.body;
    read("./data/Content/userCommodity.json",userCommodities=>{
        let userCommoditie=userCommodities.find(item=>item.userName==userName);
        if(userCommoditie){
            userCommoditie.list=userCommoditie.list.filter(key=>key.recommendID!=recommendID);
            userCommodities.map(item=>item.userName==userName?userCommoditie:item)
            write("./data/Content/userCommodity.json",userCommodities,()=>{
                res.send({code:0,success:"删除成功"})
            })
        }else {
            res.send({code:1,error:"没有找到该商品"})
        }
    })
});

//清空购物车
app.delete("/emptiedCart",(req,res)=>{
    let userName=req.query.userName;
    if (!req.query.userName) return res.sendStatus(400);
    read("./data/Content/userCommodity.json",userCommodities=>{
        userCommodities=userCommodities.filter(item=>item.userName!=userName)
        write("./data/Content/userCommodity.json",userCommodities,()=>{
            res.send({code:0,success:"成功清空购物车"})
        })
    })
});
//查看
app.get("/findCart",(req,res)=>{
    let userName=req.query.userName;
    console.log(userName);
    if (!req.query.userName) return res.sendStatus(400);
    read("./data/Content/userCommodity.json",userCommodities=>{
       let userCommoditie=userCommodities.find(item=>item.userName==userName);
        if(userCommoditie){
           res.send({code:0,success:"查看购物车成功",userCommoditie})
        }else {
            res.send({code:1,error:"查看购物车失败"})
        }
    })
});

//搜索 search    传参 关键字 keyWords 排序
app.get("/public/search",(req,res)=>{
    let keyWord=req.query.keyWord||"";
    console.log(keyWord);
    let type=req.query.type;
    keyWord&&read("./data/Content/historical.json",historical=>{
        let flag =historical.some(item=>item==keyWord);
        if(!flag){
            historical=[...historical,keyWord];
            console.log(historical);
            write("./data/Content/historical.json",historical,()=>{
                console.log("写入成功");
            })
        }
    });
    if(keyWord.length>0){
        let searchs=res.data.filter(item=>item.recommendTitle.includes(keyWord))||[];
        type&&searchs.length>0?searchs=commoditySort(searchs,type):null;
       searchs.length>0? res.send({code:0,success:"成功获取搜索数据",searchs}):res.send({code:1,error:"抱歉,您搜索的商品未找到!"});
    }else {
        res.send({code:1,error:"抱歉,您搜索的商品未找到!"});
    }
});
//热门搜索
app.get("/hotSearch",(req,res)=>{
    hotSearch.length>0?res.send({code:0,success:"成功获取列表页数据",hotSearch}): res.send({code:1,error:"获取数据失败"})
});

//获取历史纪录和清空历史记录
app.get("/historical",(req,res)=>{
    let type=req.query.type;
    read("./data/Content/historical.json",historical=>{
        if(type=="undefined"){
            res.send({code:0,success:"成功获取历史记录",historical})
        }else{
            console.log("呵呵");
            write("./data/Content/historical.json",[],()=>{
                res.send({code:0,success:"清除历史记录成功"})
            })
        }
    })
});


//注册
//注册  前后台成功
app.post("/reg",(req,res)=>{
    let user=req.body;
    read("./data/Content/userInfo.json",userInfos=>{
        let newUser=userInfos.find(item=>item.username==user.username);
        if(newUser){
            res.send({code:1,error:"用户名已经存在请重新输入"})
        }else {
            user.password=crpyto.createHash("md5").update(user.password).digest("hex");
            userInfos.push(user);
            write("./data/Content/userInfo.json",userInfos,()=>{
                res.send({code:0,success:"注册成功"})
            })
        }
    })
});
//登录  前后台成功
app.post("/login",(req,res)=>{
    let user=req.body;
    user.password=crpyto.createHash("md5").update(user.password).digest("hex");
    read("./data/Content/userInfo.json",userInfos=>{
<<<<<<< HEAD
        userInfos.forEach(item=>{
            if(item.username==user.userName&&item.password==user.password){
                req.session.user=user
                console.log("登录");
=======
        let newUser=userInfos.find(item=>item.username==user.username);
        if(newUser){
            if(newUser.password==user.password){
                req.session.user=newUser;
>>>>>>> bf0443576ba4cf91d074e1c41bfa064d53f7d114
                res.send({code:0,error:"登录成功",user});
            }else if(newUser.password!==user.password) {
                res.send({code:1,error:"密码错误"})
            }
        }else {
            res.send({code:2,error:"用户不存在"})
        }
    })
});
//退出
app.get("/logout",(req,res)=>{
    req.session.user=null;
    res.send({code:0,success:"退出成功"})
});
//判断是否登录
app.get("/validate",(req,res)=>{
    if(req.session.user){
        res.send({code:0,success:"用户已经登录",user:req.session.user})
    } else {
        res.send({code:1,error:"此用户未登录"})
    }
});
//修改密码
app.post("/changepassword",(req,res)=>{
    let {user,newpassword}=req.body;
    read("./data/Content/userInfo.json",userInfos=>{
        console.log(userInfos);
        let newUser=userInfos.find(item=>item.username==user.username);// 找到用户
        if(newUser.password==user.password){  //判断密码 是否一样
            newUser.password=crpyto.createHash("md5").update(newpassword).digest("hex");
            write("./data/Content/userInfo.json",userInfos,()=>{
                res.send({code:0,success:"修改密码成功"});
            });
        }else{
            res.send({code:1,error:"密码错误"});
        }
    })
});


// newpassword=crpyto.createHash("md5").update(user.password).digest("hex");
//公共
app.all("*",(req,res)=>{res.end("not find")});
app.listen(post,()=>console.log(`端口${post}监听成功`));
