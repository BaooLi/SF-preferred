import * as types from "../action-types";

let initSearch={
    loading:false,
    searchs:[],
    hotSearch:[],
    historical:[]
};

export default function (state=initSearch,action) {
    switch (action.type){
        case types.SEARCH:
            return {...state, loading:true};
        case types.SEARCH_SUCCESS:
            return {...state,searchs:action.payload,loading:false};
        case types.HOT_SEARCH:
            return {...state,hotSearch:action.payload.hotSearch};
        case types.GET_HISTORY:
            return {...state,historical:action.payload.historical}
            default :
            return state;
    }
}
