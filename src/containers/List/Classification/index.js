import React,{Component} from 'react';
import Filter from '../Filter'
import ListSearch from '../Listsearch'
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
                <ListSearch/>
                <Filter
                    keyWord={this.props.match.params.title}
                        fetchClassifications={this.props.fetchClassifications}
                    type={this.props.type}
                />
                {/*商品列表*/}
                    <ul className="product-list">
                        {
                            dataClassifications&&dataClassifications.map((item,index)=>(
                                <li className="cations-item" key={index}>
                                    <Link  to={{pathname:`/detail/${item.recommendID
                                        }`}}  key={index} >
                                        <div className="contentImg">
                                            <img src={item.recommendImg} />
                                        </div>
                                        <div className="classification-content ">
                                            <h4 className="recommendTitle">  {'自营 '+item.recommendTitle}</h4>
                                            <span className=" integral">{item.recommendGift}</span>
                                            <p className="price">{'￥'+item.recommendPrice}</p>
                                            <p>{item.graphicOrigin+"    |"+item.graphicComment+'条评论'}</p>
                                        </div>

                                    </Link>
                                </li>
                            ))
                        }
                    </ul>


                </div>

        )
    }
}
export default connect(
    state=>state.classification,
    actions
)(Classification);