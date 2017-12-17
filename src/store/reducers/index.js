import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";

let reducers=combineReducers({
    search,home,list
});

export default reducers;