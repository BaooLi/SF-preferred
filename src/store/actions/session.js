import * as types from "../action-types";

let actions = {
    saveSession(user){
        return function (dispatch, getState) {
                dispatch({
                    type: types.IS_LOGIN,
                    payload: user
                })
        }
    },
}
export default actions