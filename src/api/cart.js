// import {get,post} from './index';
//
// //购物车接口
// export function getCartData() {
//     return get('/findCart?userName=hh');
// }
// //购物车数量加减
// export function countChange(userData) {//{uName,id,count}
//     return post(`/public/cart`,userData);
// }
// // //删除购物车
// export function removeCart(userData) {
//     return post(`/removeCart`,userData);
// }
//
// //清空购物车
// export function emptiedCart(userData) {
//     return get(`/emptiedCart`, userData);
// }

import {get,post} from './index';

//购物车接口
export function getCartData() {
    return get('/findCart?userName=hh');
}
// userData:{userName,recommendID,count}
export function countChange(userData) {//{uName,id,count}
    return post(`/public/cart`,userData);
}
//删除购物车 删除某一项 post请求，需要传的参数：userData:{userName,recommendID}
export function removeCart(userData) {
    return post("/removeCart",userData)
}
//清空购物车 需要路径传参数:userName         let userName=req.query.userName;
// 读取数据，[userName:"",list:[]]，通过userName找到那条，并把数组中对应那条数据删除，写入文件。
export function emptiedCart(userName){
    return get(`/emptiedCart?userName=${userName}`);
}
////查看，通过userName查看其中某一项，并返回这条数据：[userName:"",list:[]]，需要路径传参数 userName
export function findCart(userName) {
    return  get(`/findCart?userName=${userName}`);
}

