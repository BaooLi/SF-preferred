import * as types from '../action-types'
import {getListData,getClassificationData} from '../../api/list'



export default {
    fetchLists(){
        return function (dispatch,getState) {
            //开始发送请求
            dispatch({type:types.GET_LIST});
            //请求完成
            dispatch({
                type:types.GET_LIST_SUCCESS,
                payload:getListData()
            })
        }
    },
    fetchClassifications(keyWord,type){
             return function(dispatch,getState){
                 dispatch({type:types.GET_CLASSIFICATION});
            dispatch({type:types.GET_CLASSIFICATION_SUCCESS,
                payload:getClassificationData(keyWord,type)});
        }

    }

}
// refreshClassifications(){//下拉刷新
//     return function(dispatch,getState){
//         let{
//             type,
//             classification:{
//                 loading,offset,limit,hasMore
//             }
//         }=getState().home;
//         if(!loading){
//             dispatch({type:types.REFRESH_CLASSIFICATION});
//             dispatch({type:types.REFRESH_CLASSIFICATION_SUCCESS,payload:getClassificationData(type,0,offset)});
//         }
//     }
// }

// return function (dispatch,getState){
//     dispatch({type:types.GET_CLASSIFICATION});
//     dispatch({type:types.GET_CLASSIFICATION_SUCCESS,
//         payload:getClassificationData(keyWord,type)
//
//     })
// }