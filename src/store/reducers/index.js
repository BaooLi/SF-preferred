import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";
import classification from './classification'


let reducers=combineReducers({
    search,home,list,classification
});

export default reducers;