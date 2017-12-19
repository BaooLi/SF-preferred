/**
 * Created by 12159 on 2017/12/19.
 */
import * as types from '../action-types';

let initState = {
    error:'',
    success:'',
    user:null,
};
export default function (state=initState,action) {
    switch (action.type){
        case types.REG:
            return {
                ...action.payload
            };
        case types.LOGIN:
            return {
                ...action.payload
            };
        case types.LOGOUT:
            return {
                ...action.payload
            };
        case types.CLEAR_MESSAGES:
            return {
                ...state,
                error:'',
                success:''
            };
        case types.VALIDATE:
            return {
                ...state,
                ...action.payload
            };
        case types.CHANGEPASSWORD:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}