import * as types from "../action-types";
import {getDetails, addGoodsCart, findGoodsCart} from '../../api/detail'

let actions = {
    detailInfo(id){
        return function (dispatch, getState) {
            getDetails(id).then(result => {
                dispatch({
                    type: types.SEARCH_DETAIL,
                    payload: result
                })
            })
        }
    },
    findCart(userName, id){
        return function (dispatch, getState) {
            findGoodsCart(userName).then(result => {
                let ele = result.userCommoditie.list.find(item => (
                item.recommendID == id));
                if(ele){
                    dispatch({
                        type: types.FIND_CART,
                        payload:ele.count
                    })
                }
            })
        }
    },
    addCart(good){
        return function (dispatch, getState) {
            //如果已登录 添加到购物车列表
            if(good.userName){
                addGoodsCart(good)
            }

            dispatch({
                type: types.ADD_CART,
                payload: good.count
            })
        }
    }
}
export default actions