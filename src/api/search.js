import {get} from "./index"
//搜索
export let getSearch=(keyWords)=> get(`/public/search?keyWord=${keyWords}`);
//热门搜索
export let getHotSearch=()=>get(`/hotSearch`);

//历史记录
export let getHistorical=(type)=>get(`/historical?type=${type}`);

