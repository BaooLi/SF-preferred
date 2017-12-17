import * as types from '../action-types';
import {getListData} from '../../api/list'


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
    }
}