import * as types from "../action-types";

let initSearch={
    loading:false,
    search:[],
    hotSearch:[],
    historical:[]
};

export default function (state=initSearch,action) {
    switch (action.type){
        case types.SEARCH:
            return {...state, loading:true};
        case types.SEARCH_SUCCESS:
            return {...state,search:action.payload.searchs,loading:false};
        case types.HOT_SEARCH:
           return {...state,hotSearch:action.payload.hotSearch};
        case types.HISTORICAL:
            return {...state,historical:action.payload.historical};
            default :
         return state;
    }
}
