import React,{Component} from 'react';import './index.less'export default class CountDown extends Component{    render(){        return (            <div className='countdown'>                <ul className='countdown-list'>                    <li className='countdown-item'>                        <a href="">                            <div className='countdown-img'>                                <img src="https://ps.sfbest.com/mapp/resource/81/818e50fcc52028239acee631dd9f35c1.jpg" alt=""/>                            </div>                            <div className='countdown-bottom'>                                <p className='countdown-describe'>柬埔寨爱普莎香米</p>                                <p className='countdown-price'><span className='rmb'>￥</span>59.50</p>                                <del className='countdown-info'>￥219.00</del>                            </div>                        </a>                    </li>                    <li className='countdown-item'>                        <a href="">                            <div className='countdown-img'>                                <img src="https://ps.sfbest.com/mapp/resource/55/55f05c3e942d20aded81ba28c12acc55.jpg" alt=""/>                            </div>                            <div className='countdown-bottom'>                                <p className='countdown-describe'>柬埔寨爱普莎香米</p>                                <p className='countdown-price'><span className='rmb'>￥</span>59.50</p>                                <del className='countdown-info'>￥219.00</del>                            </div>                        </a>                    </li>                    <li className='countdown-item'>                        <a href="">                            <div className='countdown-img'>                                <img src="http://p02.sfbest.com/2013/1300021076/middle_1300021076_1_14/348x348.jpg" alt=""/>                            </div>                            <div className='countdown-bottom'>                                <p className='countdown-describe'>柬埔寨爱普莎香米</p>                                <p className='countdown-price'><span className='rmb'>￥</span>59.50</p>                                <del className='countdown-info'>￥219.00</del>                            </div>                        </a>                    </li>                </ul>            </div>        )    }}