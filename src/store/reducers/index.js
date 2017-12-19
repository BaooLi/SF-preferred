import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";
import personal from "./personal";

let reducers=combineReducers({
    search,home,list,personal
});

export default reducers;