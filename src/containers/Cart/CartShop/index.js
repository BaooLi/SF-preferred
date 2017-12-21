import React, {Component} from "react";
import './index.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../../store/actions/cart';

class CartShop extends Component {
    constructor(){
        super();
        this.state={isEditing:false,allState:false};
   }
      componentDidMount(){
          this.props.fetchCart();
     }
    changeItemState=(id)=>{
        this.props.changeSelectState(id);
        setTimeout(()=>{
         let allState= this.props.cartData.list.every(item=>item.selected) ;
         this.setState({allState});
        },500)

    }
    edit=()=>{
        this.setState({isEditing:!this.state.isEditing})
    }
    changeAll=()=>{
        this.setState({allState:!this.state.allState},()=>{
            this.props.changeEvery(this.state.allState)
        });

    }
    clearShopCar=(userName)=>{
        this.props.clearCartData(userName);
       //  clearTimeout(timer)
       // let timer= setTimeout(()=>{
       //      this.setState({allState:!this.state.allState});
       //  },500)

}

    render() {
        let newCart=this.props.cartData;
        let products=newCart?newCart.list:[];
        return (
            <div className="cart-shop">
                <div className="top">
                    <i className="iconfont icon-fanhui"></i>
                    <span className="dizhi">北京市 北京</span>
                    <Link to="CartUp">
                    </Link>
                        <span onClick={this.edit} className="bianji">{this.state.isEditing?"完成":"编辑"}</span>
                </div>
                <div className="container">
                    <div className="better">
                        <input onChange={this.changeAll} type="checkbox" checked={this.state.allState}/>
                        <h5>优选普通商品</h5>
                    </div>
                    <ul className='products'>
                        {
                            products.length>0&&products.map((item, index)=> (
                                <li key={index} className="product">
                                   <div className="product-left">
                                    <input onClick={()=>this.changeItemState(item.recommendID)} type="checkbox" checked={item.selected}/>

                                        <img src={item.recommendImg} alt=""/>
                                    </div>
                                    <div className="detail">
                                        <p className="p1">{item.recommendTitle}</p>
                                        <span className="p3">￥</span>
                                        <span className="p4">{item.recommendPrice}</span>
                                        {
                                            this.state.isEditing?<span onClick={()=>this.props.removeCartData({userName:"hh",recommendID:item.recommendID})}><i className='iconfont icon-shanchu'></i></span>:null
                                        }

                                        <span className="count">
                 <i onClick={()=>this.props.upDate({userName:"hh",recommendID:item.recommendID,count:item.count-1})}  className="iconfont icon-jianhao3" ></i>
                           <b>{item.count}</b>
                          <i className="iconfont icon-jiahao" onClick={()=>this.props.upDate({userName:"hh",recommendID:item.recommendID,count:item.count+1})}></i>
                 </span>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <button className='clear-shop'  onClick={()=>this.clearShopCar({userName:"hh"})}>清空购物车</button>
                </div>
                <div className="wei">
                    <h5>——— 为你推荐 ———</h5>
                </div>
                <div className="shop-footer">
                    <div className="footer-left">
                        <input type="checkbox"/>
                        <span className="span1">总计:</span>
                        <span className="span2">￥
                        </span>
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
/*
 onClick={()=>this.props.subCount({this.props.userName,item.})}
 onClick={()=>this.props.subCount({userName:"hh",recommendID:item.recommendID,count:item.count})}
 */