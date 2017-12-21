/**
 * Created by 12159 on 2017/12/19.
 */
import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from '../../store/actions/personal';
class Alert extends Component {
    static defaultProps = {
        level: 'default'
    };
    componentWillUnmount(){
        setTimeout(()=>{
            this.props.clearMessages();
        },1500)
    }
    render() {
        if (this.props.success) {
            return (
                <div className="alert success">
                    {this.props.success}
                </div>
            )
        } else if (this.props.error) {
            return (
                <div className="alert error">
                    {this.props.error}
                </div>
            )
        } else {
            return null;
        }
    }
}
export default connect(
    state => state.personal,
    actions
)(Alert)