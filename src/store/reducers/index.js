import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";
import cart from './cart';

let reducers=combineReducers({
    search,home,list,cart
});

export default reducers;