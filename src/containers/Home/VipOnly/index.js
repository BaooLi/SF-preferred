import React,{Component} from 'react';import './index.less'export default class VipOnly extends Component{    render(){        return (            <div className='vip-only'>                <div className='vip-title'>                    <h4><span></span>&diams;&nbsp;优选会员专享&nbsp;&diams;<span></span></h4>                    <p>优享福利 专属为你</p>                </div>                <ul className='vip-list'>                    <li className='vip-item'>                        <a href="">                            <div className='vip-img'>                                <img src="http://p02.sfbest.com/2013/1300021076/middle_1300021076_1_14/348x348.jpg" alt=""/>                            </div>                            <div className='vip-bottom'>                                <p className='vip-describe'>柬埔寨爱普莎香米</p>                                <p className='vip-info'>￥219.00</p>                                <p className='vip-price'>会员价:￥59.50</p>                            </div>                        </a>                    </li>                    <li className='vip-item'>                        <a href="">                            <div className='vip-img'>                                <img src="http://p02.sfbest.com/2013/1300021076/middle_1300021076_1_14/348x348.jpg" alt=""/>                            </div>                            <div className='vip-bottom'>                                <p className='vip-describe'>柬埔寨爱普莎香米</p>                                <p className='vip-info'>￥219.00</p>                                <p className='vip-price'>会员价￥59.50</p>                            </div>                        </a>                    </li>                    <li className='vip-item'>                        <a href="">                            <div className='vip-img'>                                <img src="http://p02.sfbest.com/2013/1300021076/middle_1300021076_1_14/348x348.jpg" alt=""/>                            </div>                            <div className='vip-bottom'>                                <p className='vip-describe'>意大利进口西米公爵 玛塔尼干红葡萄酒 750ml</p>                                <p className='vip-info'>来自西米公爵酒庄的佳酿</p>                                <p className='vip-price'>￥219.00</p>                            </div>                        </a>                    </li>                </ul>            </div>        )    }}