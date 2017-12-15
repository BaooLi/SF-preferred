import {get} from "./index"

export let getSearch=(keyWord)=>{
    return  get(`/public/search?keyWord=${keyWord}`);
};