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
            return {
                ...state.cartData.list,
                count:action.payload.count
            };
        // case types.SUB:
        //     let cartData=state.cartList.map(item=>{
        //                   if(item.recommendID==action.payload.recommendID){
        //                       console.log(item);
        //                       return item.count-1;
        //                  }else {
        //                      return item
        //                   }
        //               });
        //     return {
        //         ...state.cartList,
        //         cartData
        //     };
        default:
            return state;
    }
}