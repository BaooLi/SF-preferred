import React,{Component} from 'react';
import Header from '../../../component/Header/index'
import Filter from '../Filter/index.js'
import {connect} from "react-redux"
import actions from "../../../store/actions/list"
import './index.less'
import {Link} from 'react-router-dom'

class Classification extends Component{
    componentDidMount(){
        this.props.fetchClassifications(this.props.match.params.title);
        console.log(this.props.match.params.title);
    }

    render(){
        let dataClassifications=this.props.classifications||[];
        console.log(dataClassifications);
        return(
            <div className="product">
               <Header/>
                <Filter/>
                {/*商品列表*/}
                <div className="product-container">
                    <ul className="product-list">
                        {
                            dataClassifications&&dataClassifications.map((item,index)=>(
                                <li className="cations-item" key={index}>
                                    <Link  to='' key={index} >
                                        <img src={item.recommendImg} alt=""/>
                                        <h4>  {item.recommendTitle}</h4>
                                        <h5>多倍积分</h5>          <span>{'￥'+item.recommendPrice}</span>
                                        <p>{item.graphicOrigin+"    |"+item.graphicComment+'条评论'}</p>

                                    </Link>
                                </li>
                            ))
                        }
                    </ul>


                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.classification,
    actions
)(Classification);
