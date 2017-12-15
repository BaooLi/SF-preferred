import React, {Component} from "react";
import {dd} from "../../api";
import './index.less';
import {Link} from 'react-router-dom';
export default class Personal extends Component {
    componentDidMount() {
        console.log(2);
        console.log(dd().then(res => res.data));
    }

    render() {
        return (
            <div className="personal">
                <div className="login">
                    <Link to='/login' className="login-btn">登录</Link>
                    <span className="login-set">设置 <i className="spe">&gt;</i></span>
                </div>
                <div className="order">
                    我的优选订单
                    <Link to="" className="all-or">全部订单<i className="spe">&gt;</i></Link>
                    <div className="or-info">
                            <span>
                                <i className="iconfont icon-weibiaoti2fuzhi04"></i>
                                <br/>
                                待付款
                            </span>
                        <span><i className="iconfont icon-peisongzhong"></i>
                                <br/>
                                配送中
                            </span>
                        <span><i className="iconfont icon-daipingjia"></i>
                                <br/>
                                待评价
                            </span>
                        <span><i className="iconfont icon-tuikuan"></i>
                                <br/>
                                退款/售后
                            </span>
                    </div>
                </div>
                <ul className="person-info">
                    我的优选信息
                    <li><i className="iconfont icon-dizhiguanli spe2"></i>我的地址 <i className="spe1">&gt;</i></li>
                    <li><i className="iconfont icon-huiyuan spe2"></i>优选会员 <i className="spe1">&gt;</i></li>
                    <li><i className="iconfont icon-mendian2 spe2"></i>我的门店 <i className="spe1">&gt;</i></li>
                    <li><i className="iconfont icon-shoucang1 spe2"></i>我的收藏 <i className="spe1">&gt;</i></li>
                    <li><i className="iconfont icon-liulanlishi1 spe2"></i>历史浏览 <i className="spe1">&gt;</i></li>
                    <li><i className="iconfont icon-anquanzhongxin spe2"></i>安全中心 <i className="spe1">&gt;</i></li>
                    <li><i className="iconfont icon-kefu1 spe2"></i>客服热线 <i className="spe1">&gt;</i></li>
                </ul>
            </div>
        )
    }
}