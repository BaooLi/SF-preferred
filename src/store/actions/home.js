import * as types from '../action-types';import {getSliders,getRecommends} from '../../api/home'export default {    fetchSliders(){        return function (dispatch,getState) {            dispatch({type:types.FETCH_SLIDERS,payload:null});            getSliders().then((payload)=>{                dispatch({type:types.FETCH_SLIDERS_SUCCESS,payload})            })        }    },    getRecommendDatasljb(){//上拉刷新 获取数据        console.log(1);        //上拉加载更多，每次上拉都会执行getRecommends(offset,limit)这个函数，并且通过reducer会返回增加后的offset值，直到offset+limit=下一页的起始索引大于总条数，就没有更多数据了hasMore=false        return function (dispatch,getState) {            console.log(getState().home);            let {                loadingFlag,                hasMore,                offset,                limit}=getState().home;            if(hasMore&&!loadingFlag){//如果已经获取数据了，则重复点击不要再获取了                dispatch({type:types.GET_RECOMMEND})                //dispatch({type:types.GET_RECOMMEND_SUCCESS,payload:getRecommends(offset,limit)});                getRecommends(offset,limit).then(payload=>{                    console.log(payload);                    dispatch({type:types.GET_RECOMMEND_SUCCESS,payload});                    console.log(payload,"这是为你推荐");                })            }        }    },//下拉刷新    refreshRecommendDatasljb(){        return function (dispatch,getState) {            let {                offset,                hasMore,                limit,                loadingFlag            }=getState().home;            if(hasMore&&!loadingFlag){                dispatch({type:types.REFRESH_RECOMMENDS,payload:null});                dispatch({type:types.GET_RECOMMEND_SUCCESS,payload:getRecommends(0,offset)})            }        }    }}