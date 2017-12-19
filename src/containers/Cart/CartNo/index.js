import React,{Component} from "react";
import Tab from '../../../component/Tab';
import './index.css';
import {Link} from 'react-router-dom';
export default class CartNo extends Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div className="cart-bg">
                <div className="cart-h">
                <h3>购物车</h3>
                </div>
                <div className="container">
                <img src={require("../images/cart-bg.jpg")} alt=""/>
                <p>购物车暂无商品</p>
                    <Link to="/Home"><button className="btn collect">我的收藏</button></Link>
                 <Link to="/Home"><button className="btn shop">去逛逛</button></Link>
                    <h5>——— 为你推荐 ———</h5>
                </div>

                <Tab className="tab"/>
            </div>
        )
    }
}
