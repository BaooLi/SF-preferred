import * as types from "../action-types";

let initSearch = {
    userName: '',
    password: '',
};

export default function (state = initSearch, action) {
    switch (action.type) {
        case types.IS_LOGIN:
            return action.payload;
        default :
            return state;
    }
}

