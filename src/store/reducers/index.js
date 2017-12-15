import {combineReducers} from "redux"
import search from "./search";
import home from "./home";

let reducers=combineReducers({
    search,home
});

export default reducers;