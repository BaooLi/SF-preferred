import React,{Component} from "react";
import {Route,Redirect} from "react-router-dom"

//判断是否登录
export default function ({component:Component,...rest}) {
    return (
        <Route {...rest} render={({history,location})=>location.state?<Component/>:<Redirect to={{pathname:"/login",state:{from:location.pathname}}}/>
        }/>
    )
}