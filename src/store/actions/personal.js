/**
 * Created by 12159 on 2017/12/19.
 */

import * as types from '../action-types';
import {reg, login, logout, validate, changepassword,} from '../../api/personal';
import {push} from 'react-router-redux'
export default {
    reg(user){
        return function (dispatch, getState) {
            reg(user).then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.REG,
                    payload: {success, error}
                });
                if (code == 0) {
                    dispatch(push('/login'));
                }
            })
        }
    },
    login(user){
        return function (dispatch, getState) {
            login(user).then(result => {
                let {code, success, error, user} = result;
                dispatch({
                    type: types.LOGIN,
                    payload: {success, error, user}
                });
                if (code == 0) {
                    dispatch(push('/personal'));
                }
            })
        }
    },
    logout(){
        return function (dispatch, getState) {
            logout().then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.LOGOUT,
                    payload: {success, error}
                });
                dispatch(push('/login'));
            })
        }
    },
    clearMessages(){
        return {
            type: types.CLEARMESSAGE
        }
    },
    validate(){
        return function (dispatch, getState) {
            validate().then(result => {
                let {code, success, error, user} = result;
                dispatch({
                    type: types.VALIDATE,
                    payload: {success, error, user}
                })
            })
        }
    },
    changepassword(user){
        return function (dispatch, getState) {
            changepassword(user).then(result=>{
                let {code, success, error, user} = result;
                dispatch({
                    type:types.CHANGEPASSWORD,
                    payload:{success,error,user}
                });
                if (code == 0) {
                    dispatch(push('/login'));
                }
            })
        }
    }
}