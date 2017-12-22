import React,{Component} from 'react';
import Filter from '../Filter'
import ListSearch from '../Listsearch'
import {Link} from 'react-router-dom'
import  './index.less';
export default class ListData extends Component{
    render(){
        return(
            <div className="productList">
                <ListSearch/>
                <Filter
                    keyWord={this.props.keyWord}
                    fetchClassifications={this.props.fetchClassifications}
                    type={this.props.type}
                />
                <ul className="product-list">
                    {
                        this.props.dataClassifications&&this.props.dataClassifications.map((item,index)=>(
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