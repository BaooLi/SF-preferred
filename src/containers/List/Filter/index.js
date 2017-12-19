import React,{Component} from 'react';
import './index.less'
export default class Filter extends Component{
    render(){
        return(
            <div className="sort">
                <span>热卖</span>
                <span>价格</span>
                <span>好评</span>
                <span>产地</span>
            </div>
        )
    }
}
