import React,{Component} from "react";
import "./index.less"
export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <i onClick={()=>this.props.push("/list")} className="iconfont icon-fanhui"></i>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}