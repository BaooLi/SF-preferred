import React,{Component} from "react";
  // import CartNo from './CartNo/index';
  import CartShop from './CartShop/index';
  // import CartUp from './CartUp/index';
import {connect} from 'react-redux';
import actions from '../../store/actions/cart';
 export default class Cart extends Component{
    render(){
        return(
            <div>

              <CartShop/>

            </div>
        )
    }
}