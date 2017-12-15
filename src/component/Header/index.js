import React,{Component} from "react";
import "./index.less"
export default class Header extends Component{
    render(){
        console.log(this.props.title);
        return(
            <div className="header">
                <i className="iconfont icon-fanhui"></i>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}