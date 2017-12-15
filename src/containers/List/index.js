import React,{Component} from "react";
import {emptiedCart} from "../../api"
export default class List extends Component{
    componentDidMount(){
        console.log(emptiedCart().then(res =>  console.log(res)));
    }
    render(){
        return(
            <div>
                分类页
            </div>
        )
    }
}