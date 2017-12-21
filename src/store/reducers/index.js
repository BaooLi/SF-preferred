import {combineReducers} from "redux"
import search from "./search";
import home from "./home";
import list from "./list";

import classification from './classification'
import personal from "./personal";
import detail from './details'

let reducers=combineReducers({
    search, home, list, classification, detail, personal
})

export default reducers;