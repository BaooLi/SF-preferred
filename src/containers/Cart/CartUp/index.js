import React,{Component} from "react";
import './index.css';
import {Link} from 'react-router-dom';

export default class CartUp extends Component{
    render(){
        return (
            <div className="cart-up">


                <div className="top">
                    <i className="iconfont icon-fanhui"></i>
                    <span className="dizhi">北京市 北京</span>
                    <Link to="CartUp"><span className="bianji">完成</span></Link>
                </div>


                <div className="container">
                    <div className="better">
                        <i class="iconfont icon-duihao3"></i>
                        <h5>优选普通商品</h5>
                    </div>
                    <ul className='products'>

                        <li className="product">
                            <div className="product-left">

                                <i className="iconfont icon-duihao3"></i>
                                <img src={require("../images/shiwu.jpg")} alt=""/>

                            </div>

                            <div className="detail">
                               <i className="iconfont icon-shanchu"></i>
                                <button className="sub">-</button><span>1</span><button className="add">+</button>

                            </div>


                        </li>
                    </ul>

                </div>

                <div className="wei">
                    <h5>——— 为你推荐 ———</h5>
                </div>


                <div className="up-footer">
                    <div className="footer-left">
                        <i className="iconfont icon-duihao3"></i>
                        <span className="span1">总计:</span>
                        <span className="span2">￥96.1</span>
                        <span className="span3">商品金额:</span>

                        <span className="span4">￥96.1</span><span    className="span5">(不含运费)</span>

                    </div>
                    <button>批量删除</button>
                </div>


            </div>
        )
    }
}
