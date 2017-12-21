 import * as types from '../action-types';
 import {getCartData,countChange,removeCart,emptiedCart,findCart} from '../../api/cart'

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
    changeSelectState(id){
      return function (dispatch, getState) {

          dispatch({type: types.SELECTED_STATE,id})}
    },
    changeEvery(statusAll){
        return function (dispatch, getState) {
            dispatch({type: types.CHANGE_EVERY,statusAll})}
    },





    //修改购物车的数量 userData:{userName,recommendID,count}
   upDate(cartItem){
        return function (dispatch, getState) {
            dispatch({type: types.UPDATE_CART, payload:countChange(cartItem)})
        }
    },
    //删除购物车 删除某一项 post请求，需要传的参数：userData:{userName,recommendID}
    removeCartData(cartObj){
        return function (dispatch, getState) {
            dispatch({type: types.DEL_CARTITEM, payload:removeCart(cartObj)})
        }
    },
    ////清空购物车 需要路径传参数:userName         let userName=req.query.userName;
    // 读取数据，[userName:"",list:[]]，通过userName找到那条，并把数组中对应那条数据删除，写入文件。
    clearCartData(userName){
        return function (dispatch, getState) {
            dispatch({type: types.CLEAR_CARTITEM, payload:emptiedCart(userName)})
        }
    },
    //查看，通过userName查看其中某一项，并返回这条数据：[userName:"",list:[]]，需要路径传参数 userName
    checkCartData(userName){
        return function (dispatch, getState) {
            dispatch({type: types.LOOK_CART, payload:findCart(userName)})
        }
    },





}

