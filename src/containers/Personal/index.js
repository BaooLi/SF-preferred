import React,{Component} from "react";
import {dd} from "../../api"
export default class Personal extends Component{
    componentDidMount(){
        console.log(2);
        console.log(dd().then(res => res.data));
    }
    render(){
        return(
            <div>
                个人设置
            </div>
        )
    }
}