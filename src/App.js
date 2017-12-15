import React,{Component} from "react";
import "./style/reset.css";
import "bootstrap/less/bootstrap.less"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./containers/Home/index";
import List from "./containers/List/index";
import Cart from "./containers/Cart/index";
import Reg from "./containers/Reg/index";
import Login from "./containers/Login/index";
import Personal from "./containers/Personal/index";
import Tab from "./component/Tab/index";
export default class App extends Component{
    render(){
        return(
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/list" component={List}/>
                                <Route path="/cart" component={Cart}/>
                                <Route path="/personal" component={Personal}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/reg" component={Reg}/>

                            </Switch>
                            <Tab/>
                        </div>
                    </Router>
        )
    }
}