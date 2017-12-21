import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";
<<<<<<< HEAD
import detail from './details'

let reducers=combineReducers({
    search,home,list,detail
=======
import personal from "./personal";

let reducers=combineReducers({
    search,home,list,personal
>>>>>>> bf0443576ba4cf91d074e1c41bfa064d53f7d114
});

export default reducers;