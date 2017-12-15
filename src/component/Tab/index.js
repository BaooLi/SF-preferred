import React,{Component} from "react";
import "./index.less";
import {NavLink} from "react-router-dom"
export default class Tab extends Component{
    render(){
        return(
                <nav className="footer">
                    <NavLink exact to="/">
                        <i className="iconfont icon-shouye">
                        </i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/list">
                        <i className="iconfont icon-fenlei">

                        </i>
                        <span>分类</span>
                    </NavLink>
                    <NavLink to="/cart">
                        <i className="iconfont icon-cart">

                         </i>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink to="/personal">
                        <i className="iconfont icon-gerenzhongxin">
                        </i>
                        <span>我的优选</span>
                    </NavLink>
                </nav>
        )
    }
}