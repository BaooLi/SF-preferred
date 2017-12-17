import * as types from "../action-types";
import {push} from "react-router-redux"
import {getSearch,getHotSearch,getHistory} from "../../api/search"

let actions= {
    fetchSearch(keyWords){
        return function (dispatch, getState) {
            dispatch({
                type: types.SEARCH
            });
            getSearch(keyWords).then(res => {
                let {code,error,success,searchs}=res;
                dispatch({
                    type:types.SEARCH_SUCCESS,
                    payload:searchs
                });
                if(code==0){
                    dispatch(push(`/list/${keyWords}`))
                }
            })
        }
    },
    fetchHotSearch(){
        return function (dispatch,getState) {
            dispatch({
                type:types.HOT_SEARCH,
                payload:getHotSearch()
            })
        }
    },
    fetchHistory(type){
        return function (dispatch,getState) {
            dispatch({
                type:types.GET_HISTORY,
                payload:getHistory(type)
            })
        }
    }
};
export default actions;