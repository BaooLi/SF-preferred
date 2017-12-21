import React, {Component} from "react";
import "./index.less";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import action1 from '../../../store/actions/details'
import action2 from '../../../store/actions/session'
const actions = {
    ...action1,
    ...action2
}

class DetailFooter extends Component {
    constructor() {
        super();
        this.state = {goodNum: 0}
    }

    componentDidMount() {
        //如果用户已登录，查看此商品在购物车中的数量
        let userName = this.props.userName
        let id = this.props.details.recommendID
        userName ? this.props.findCart(userName, id) : null
    }

    handleClick = () => {
        let goodNum = this.props.num
        //添加购物车
        this.props.addCart({
            userName: this.props.userName||"",
            recommendID: this.props.details.recommendID,
            count: goodNum
        })
    }

    render() {
        return (
            <div className="detailFooter">
                <Link to="/cart">
                    <i className="glyphicon glyphicon-shopping-cart">
                        <em className="goodNum">{this.props.carNum}</em></i>
                </Link>
                <a href="javascript:void(0);">
                    <i className="glyphicon glyphicon-star-empty">
                    </i>
                </a>
                <a href="javascript:void(0);">
                    <span onClick={this.handleClick}>加入到购物车</span>
                </a>
                <Link to="/cart">
                    <span>一键购买</span>
                </Link>
            </div>
        )
    }
}
export default connect(
    state => ({...state.detail, ...state.session}),
    actions
)(DetailFooter)