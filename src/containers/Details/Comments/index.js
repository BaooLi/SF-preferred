import React, {Component} from 'react'
import './index.less'
import {connect} from 'react-redux'
import actions from '../../../store/actions/details'
class Comments extends Component {
    componentDidMount() {
        let id = this.props.match.params.id
    }
    render() {
        let comments = this.props.comment.text
        return (
            <div className="detailComments">
                <div className="head">
                    <span><i className="iconfont icon-fanhui" onClick={this.props.history.goBack}></i>用户评价</span>
                </div>
                <div className="user-comments">
                    <div className="com-number">
                        总共评价数：({comments?comments.length:0}条)
                    </div>
                    <ul className="comments">
                        {
                            comments ? (
                                comments.map((comment,index)=>(
                                    <li key={index}>
                                        <p>{comment.content}</p>
                                        <h1><em>{comment.user}</em><i>{comment.time}</i></h1>
                                    </li>
                                ))
                            ) : <p>暂无评价</p>
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(
    state => state.detail,
    actions
)(Comments)


