import React,{Component} from "react";
import "./style/reset.css";
import "bootstrap/less/bootstrap.less"
import {HashRouter as Router, Route, Switch} from "react-router-dom"

import List from "./containers/List/index";
import Cart from "./containers/Cart/index";
import Personal from "./containers/Personal/index";
import Login from "./containers/Login/index";
import Change from "./containers/Change/index";
import Reg from "./containers/Reg/index";
import Detail from "./containers/Details/index";
import Comments from "./containers/Details/Comments/index";
import Tab from "./components/Tab/index";
import createHashHistory from "history/createHashHistory"
import {ConnectedRouter} from "react-router-redux"
import Search from "./containers/Search/index";
import Home from "./containers/Home/index";
import Classification from './containers/List/Classification/index'
import PictureTextDetail from "./containers/Details/PictureTextDetail/index";
let history=createHashHistory();
export default class App extends Component{
    render(){
        return(
                    <ConnectedRouter history={history}>
                        <div>
                            <Tab/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/list" component={List}/>
                                <Route path="/cart" component={Cart}/>
                                <Route path="/personal" component={Personal}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/reg" component={Reg}/>
                                <Route path="/changepassword" component={Change}/>
                                <Route path="/search" component={Search}/>
                                <Route path="/detail/:id" component={Detail}/>

                                <Route path="/comments/:id" component={Comments}/>
                                <Route path="/pictureTextDetail/:id" component={PictureTextDetail}/>
                                <Route path="/list/classification/:title" component={Classification}/>
                            </Switch>
                        </div>
                    </ConnectedRouter>
        )
    }
}
