import React,{Component} from "react";
import "./style/reset.css";
import "bootstrap/less/bootstrap.less"
import {HashRouter as Router, Route, Switch} from "react-router-dom"

import List from "./containers/List/index";
import Cart from "./containers/Cart/index";
import Personal from "./containers/Personal/index";
import Tab from "./components/Tab/index";
import createHashHistory from "history/createHashHistory"
import {ConnectedRouter} from "react-router-redux"
import Search from "./containers/Search/index";
import Home from "./containers/Home/index";
import Recommend from "./containers/Home/Recommend/index";
import Details from "./containers/Details/index";
import MenuVideo from "./containers/Home/MenuVideo/index";
let history=createHashHistory();
export default class App extends Component{
    render(){

        return(
                    <ConnectedRouter history={history}>
                        <div>
                            <Tab/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/list" component={List}/>
                                <Route path="/cart" component={Cart}/>
                                <Route path="/personal" component={Personal}/>
                                <Route path="/search" component={Search}/>
                                <Route path="/detail" component={Details}/>
                                <Route path="/menu" component={MenuVideo}/>
                            </Switch>
                        </div>
                    </ConnectedRouter>
        )
    }
}