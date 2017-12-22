import React,{Component} from "react";
import {getCarousel,getRecommend} from "../../api/index"
import "./index.less"
import {
    Route,
    Link
} from "react-router-dom"

export default class d extends Component{
    constructor(){
        super();
        this.state={homeCarousel:[],recommend:[],offset:0,hasMore:true, decide:false};
    }
       // async getData(){
    //     if(!this.state.decide&&this.state.offset<13){
    //         this.setState({decide:true});
    //         let  {recommend,hasMore}=await getRecommend(this.state);
    //         this.setState({recommend:[...this.state.recommend,...recommend],hasMore,decide:false},()=>{
    //             console.log(this.state.offset);
    //             this.setState({offset:this.state.offset+5})
    //         });
    //     }
    // }
    render(){
        return (
                     <div>
                         <Link to="/search"> <input type="text"/></Link>
                         <div className="content">
                               <div className="sm-title">
                                 <h2>为你推荐</h2>
                                 <p>全球美食 精选好货</p>
                             </div>
                         </div>
                     </div>

        );
    }
}