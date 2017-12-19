/**
 * Created by 12159 on 2017/12/15.
 */
import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from '../../store/actions/personal';
import {Link} from 'react-router-dom';
class Reg extends Component{
    handleReg = () => {
        let username = this.username.value;
        let password = this.password.value;
        this.props.reg({username, password});
    };

    render(){
        return (
            <div className="reg">
                <div className="reg-header">
                    <i  onClick={()=>this.props.history.goBack()}>	&lt;</i>
                    优选注册
                </div>
                <input ref={input => this.username = input} type="text" placeholder="请输入手机号" className="input"/>
                <input ref={input => this.password = input} type="text" placeholder="请输入密码" className="input">

                </input>
                <div className="reg-btn" onClick={this.handleReg}>注册</div>
                <div className="reg-footer">
                    注册遇到问题?
                    <Link to="">联系客服</Link> <br/>
                    <div className="reg-mes">
                        注册即视为同意<span>顺丰优选注册协议</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => state.personal,
    actions
)(Reg)