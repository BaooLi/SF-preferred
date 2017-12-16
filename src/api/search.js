import {get} from "./index"

export let getSearch=(keyWords)=>{
    return  get(`/public/search?keyWord=${keyWords}`);
};