import * as types from '../action-types';

const initState={
    loading:false,
    cartData:{
        list:[]
    },

};
export default function (state=initState,action) {

    switch (action.type){
        case types.GET_CART:
            return {
                ...state,
                loading:true,
            };
        case types.GET_CART_SUCCESS:
            return {
                ...state,
                loading:false,
                // cartList:action.payload.userCommoditie.list
                cartData:{
                    list:[...action.payload.userCommoditie.list]
                },

            };
        case types.UPDATE_CART:
            console.log(action);
            return {
                ...state,
                cartData:{
                    list:action.payload.data
                }
            };
        case types.SELECTED_STATE:
            console.log(action.id

            );
            return {
                cartData:{
                    list:state.cartData.list.map(item=>{
                        return item.recommendID==action.id

                            ?{...item,selected:!item.selected}:item;
                    })
                },

            }
        case types.DEL_CARTITEM:
            return {
                ...state,
                cartData: {
                    list: action.payload.shopData
                }
            }
        case types.CHANGE_EVERY:
            return {
                cartData:{
                    list:state.cartData.list.map(item=>{
                        return {...item,selected:action.statusAll}
                    })
                }
            }
        case types.CLEAR_CARTITEM:
            return {
                ...action.payload
            }
        case types.LOOK_CART:
            return {
                ...state,

            }
        default:
            return state;
    }
}

