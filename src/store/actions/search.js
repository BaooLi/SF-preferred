import * as types from "../action-types";
import {push} from "react-router-redux"
import {getSearch} from "../../api/search"

export default function () {
    return function (dispatch,getState) {
        dispatch({
            type:types.SEARCH
        });
        dispatch({
            type:types.SEARCH_SUCCESS,
            payload:getSearch(keyWord)
        })
    }
}