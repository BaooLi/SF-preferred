import React,{Component} from 'react';import './index.less'export default class CountDown extends Component{    render(){        return (            <div className='countdown'>                <ul className='countdown-list'>                    {                        this.props.spike.length>0&&this.props.spike.map((item,index)=>(                            <li key={index} className='countdown-item'>                                <a href="">                                    <div className='countdown-img'>                                        <img src={item.spikeImg} alt=""/>                                    </div>                                    <div className='countdown-bottom'>                                        <p className='countdown-describe'>{item.spikeTitle}</p>                                        <p className='countdown-price'><span className='rmb'>￥</span>{item.spikePrice}</p>                                        <del className='countdown-info'>￥{item.originalPrice}</del>                                    </div>                                </a>                            </li>                        ))                    }                </ul>            </div>        )    }}/*originalPrice:"199"spikeImg:"https://ps.sfbest.com/mapp/resource/17/1751fedb969214e1129a88508e169cc5.jpg"spikePrice:"99"spikeTitle:"世家马孔白葡萄酒" */