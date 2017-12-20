 import * as types from '../action-types';
 import {getCartData,countChange} from '../../api/cart'

//获取 购物车列表
export default {
    fetchCart(){
        return function (dispatch, getState) {
            dispatch({type: types.GET_CART});
            dispatch({
                type: types.GET_CART_SUCCESS,
                payload: getCartData()
            })

        }
    },
    //修改购物车的数量
   upDate(cartItem){
        return function (dispatch, getState) {
            dispatch({type: types.UPDATE_CART, payload:countChange(cartItem)})
        }
    }

}

