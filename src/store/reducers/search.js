import * as types from "../action-types";

let initSearch={
    loading:false,
    search:[]
};

export default function (state=initSearch,action) {
    switch (action.type){
        case types.SEARCH:
            return {...state, loading:true};
        case types.SEARCH_SUCCESS:
            return {...state,search:action.payload.searchs,loading:false};
        default :
            return state;
    }
}
