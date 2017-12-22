import React, {Component} from "react";
import "./index.less";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import actions from '../../../store/actions/details'


class DetailFooter extends Component {
    constructor() {
        super();
        this.state = {goodNum: 0}
    }

    componentDidMount() {
        //如果用户已登录，查看此商品在购物车中的数量
        let username = this.props.username;
        let id = this.props.details.recommendID
        username ? this.props.findCart(username, id) : null
    }

    handleClick = () => {
        let goodNum = this.props.num;
        this.setState({goodNum});
        this.props.addCart({
            username: this.props.username||"",
            recommendID: this.props.details.recommendID,
            count: goodNum
        })
    }

    render() {
        return (
            <div className="detailFooter">
                <Link to="/cart">
                    <i className="glyphicon glyphicon-shopping-cart">
                        <em className="goodNum">{this.state.goodNum}</em></i>
                </Link>
                <a href="javascript:void(0);">
                    <i className="glyphicon glyphicon-star-empty">
                    </i>
                </a>
                <a href="javascript:void(0);">
                    <span onClick={this.handleClick}>加入到购物车</span>
                </a>
                {
                    this.props.username?<Link to={{pathname:`/cart`,state:this.props.username}}>
                        <span>一键购买</span>
                    </Link>:<Link to="/login">
                        <span>一键购买</span>
                    </Link>
                }
            </div>
        )
    }
}
export default connect(
    state => ({...state.detail, ...state.personal}),
    actions
)(DetailFooter)