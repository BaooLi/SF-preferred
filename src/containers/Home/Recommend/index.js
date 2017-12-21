import React,{Component} from 'react';import {upLoadMore, downRefresh} from '../../../utils';import './index.less';import {Link} from 'react-router-dom'import Loading from "../../../components/Loading/index";export default class Recommend extends Component{    render(){        console.log(this.props.loadingFlag,"我是load");        return (            <div  className='recommend'>                <div className='recommend-title'>                    <h4><span></span>&diams;&nbsp;为你推荐&nbsp;&diams;<span></span></h4>                    <p>全球美食 精选好货</p>                </div>                    <ul  className='recommend-list'>                        {                            this.props.recommend.length>0&&this.props.recommend.map((item,index)=>(                                <Link key={index} to='/detail'>                                    <li>                                        <div className='p-img'><img src={item.recommendImg} alt=""/></div>                                        <p className='p-describe'>{item.recommendTitle}</p>                                        <p className='p-info'>{item.recommendDescribe}</p>                                        <div className='p-bottom'>                                            <span className='price'>￥{item.recommendPrice}</span>                                            {                                                item.recommendGift? <span className='score'>{item.recommendGift}</span>:null                                            }                                            <i className='iconfont icon-buy-car shop-car'></i>                                        </div>                                    </li>                                </Link>                            ))                        }                    </ul>                    {                        this.props.loadingFlag?<Loading/>:(this.props.hasMore?<div onClick={this.props.getRecommendDatas} className="load-more">加载更多</div>:<div className="load-more">已经没有更多数据</div>)                    }                </div>        )    }}