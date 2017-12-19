import React,{Component} from "react";
  // import CartNo from './CartNo/index';
 import CartShop from './CartShop/index';
 // import CartUp from './CartUp/index';
export default class Cart extends Component{
    render(){
        return(
            <div>
              {/*<CartNo/>*/}
              <CartShop/>
              {/*<CartUp/>*/}
            </div>
        )
    }
}