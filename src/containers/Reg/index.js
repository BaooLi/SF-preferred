/**
 * Created by 12159 on 2017/12/15.
 */
import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class Reg extends Component{
    render(){
        return (
            <div className="reg">
                <div className="reg-header">
                    <i>	&lt;</i>
                    优选注册
                </div>
                <input ref={input => this.username = input} type="text" placeholder="请输入手机号" className="input"/>
                <input ref={input => this.password = input} type="text" placeholder="请输入图形验证码" className="input">

                </input>
                <div className="pre">注册即可领取99元大礼包</div>
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
