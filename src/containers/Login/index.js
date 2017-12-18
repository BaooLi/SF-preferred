/**
 * Created by 12159 on 2017/12/15.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';
import {Link} from 'react-router-dom';
export default class Login extends Component {
    handleReg = () => {
        let username = this.username.value;
        let password = this.password.value;
    };

    render() {
        return (
            <div className="log">
                <div className="log-header">
                    <i>	&lt;</i>
                    顺丰优选登录
                </div>
                <input ref={input => this.username = input} type="text" placeholder="请输入手机号/邮箱/用户名" className="input"/>
                <input ref={input => this.password = input} type="text" placeholder="请输入密码" className="input"/>
                <div
                    onClick={this.handleReg}
                    className="log-btn">登&nbsp;录
                </div>
                <div className="quick-log">
                    <Link to="/reg">手机快速注册</Link>
                </div>

            </div>
        )
    }
}
