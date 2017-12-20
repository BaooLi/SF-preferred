import React, {Component} from "react";
import './index.less'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <div className="detailHeader">
                <i onClick={()=>this.props.history.goBack()}></i>
                <a href="javascript:void(0);">
                    <span>商品</span>
                </a>
                <Link to={"/pictureTextDetail/"+this.props.id}>
                      <span>详情</span>
                </Link>
                <Link to={"/comments/"+this.props.id}>
                    <span>评价</span>
                </Link>
            </div>
        )
    }
}