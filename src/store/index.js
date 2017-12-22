import {createStore,applyMiddleware} from "redux";
import reducers from "./reducers"
import logger from "redux-logger"; //logger中间件
import thunk from "redux-thunk";  //thunk 中间件
import promise from "redux-promise"; //promise 中间件

import {routerMiddleware} from "react-router-redux"
import createHistory from "history/createHashHistory"
const history=createHistory();
let router=routerMiddleware(history);//路由中间件

let store= applyMiddleware(router,thunk,promise)(createStore)(reducers);

window.store=store;
export default store;
