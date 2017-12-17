import {get} from "./index"

export let getSearch=(keyWords)=> get(`/public/search?keyWord=${keyWords}`);

export let getHotSearch=()=>get(`/hotSearch`);

export let getHistory=(type)=>get(`/historical?type=${type}`);