import React, {Component} from "react";
import './index.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../../store/actions/cart';

class CartShop extends Component {
    constructor(){
        super();
        this.state={count:0};
   }
      componentDidMount(){
          this.props.fetchCart();
     }
    componentWillReceiveProps(){
        this.props.fetchCart();
    }

    render() {
        let newCart=this.props.cartData;
        let products=newCart?newCart.list:[];


        return (
            <div className="cart-shop">
                <div className="top">
                    <i className="iconfont icon-fanhui"></i>
                    <span className="dizhi">北京市 北京</span>
                    <Link to="CartUp"><span className="bianji">编辑</span></Link>
                </div>
                <div className="container">
                    <div className="better">
                        <i className="iconfont icon-duihao3"></i>
                        <h5>优选普通商品</h5>
                    </div>
                    <ul className='products'>
                        {
                            products.length>0&&products.map((item, index)=> (
                                <li key={index} className="product">
                                    <div className="product-left">
                                        <i className="iconfont icon-duihao3"></i>
                                        <img src={item.recommendImg} alt=""/>
                                    </div>
                                    <div className="detail">
                                        <p className="p1">{item.recommendTitle}</p>
                                        <span className="p3">￥</span>
                                        <span className="p4">{item.recommendPrice}</span>
                                        <span className="count">
                 <i className="iconfont icon-jianhao3" onClick={()=>this.props.upDate({userName:"hh",recommendID:item.recommendID,count:item.count-1})}></i>
                           <b>{item.count}</b>
                          <i className="iconfont icon-jiahao" onClick={()=>this.props.upDate({userName:"hh",recommendID:item.recommendID,count:item.count+1})}></i>
                 </span>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="wei">
                    <h5>——— 为你推荐 ———</h5>
                </div>
                <div className="shop-footer">
                    <div className="footer-left">
                        <i className="iconfont icon-duihao3"></i>
                        <span className="span1">总计:</span>
                        <span className="span2">￥97</span>
                        <span className="span3">商品金额:</span>
                        <span className="span4">￥97</span><span className="span5">(不含运费)</span>
                    </div>
                    <button>结算</button>
                </div>

            </div>
        )
    }
}

export default connect(
    state => state.cart,
    actions
)(CartShop)
