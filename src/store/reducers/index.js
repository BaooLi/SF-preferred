import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";
import detail from './details'

let reducers=combineReducers({
    search,home,list,detail
});

export default reducers;