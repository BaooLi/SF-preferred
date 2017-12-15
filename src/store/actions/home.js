import * as types from '../action-types';
import {getSliders} from '../../api/home'
export default {
    fetchSliders(){
        return function (dispatch,getState) {
            dispatch({type:types.FETCH_SLIDERS});
            dispatch({
                type:types.FETCH_SLIDERS_SUCCESS,
                payload:getSliders()
            })
        }
    }
}