import * as types from '../action-types'
let initState={
    loading:false,
};
export default function (state=initState,action) {
    switch (action.type){
        case types.FETCH_SLIDERS:
            return {
                ...state,
                    loading:true,
            }
        case types.FETCH_SLIDERS_SUCCESS:
            return {
                ...state,
                    loading:false,
                ...action.payload

            }
        default:
            return state;
    }
}