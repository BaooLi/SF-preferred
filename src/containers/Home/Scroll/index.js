import React,{Component} from 'react';import {Link} from 'react-router-dom';import ReactIScroll from 'react-iscroll';let iScroll = require('iscroll');import './index.less';export default class Scroll extends Component{    render(){        return (            <div className='sf-video'>                <div className='video-title'>                    <h4><span></span>&diams;&nbsp;每日菜谱&nbsp;&diams;<span></span></h4>                    <p>跟私房大厨 做舌尖盛宴</p>                </div>                <ReactIScroll  iScroll={iScroll}                               options={{mouseWheel: true,                                   scrollX: true,                                   momentum:true,                                   freeScroll: true,                                   disablePointer: true,                                   disableTouch:true,                                   disableMouse:false}}>                    <div style={{width:'250%'}}>                <ul className='video-list'>                    <li>                        <div className='video-img'>                            <Link to='/menu'>                            <img src="https://ps.sfbest.com/mapp/resource/31/3121de3ec794a861afdecb6244b0b6a4.jpg" alt="" data-original='https://ps.sfbest.com/mapp/resource/31/3121de3ec794a861afdecb6244b0b6a4.jpg'/>                            </Link>                        </div>                        <p>周二菜谱——大阪烧</p>                        <div className='sf-footer'>                            <span>香脆酥软</span>                            <span>日式风味</span>                        </div>                    </li>                    <Link to='/menu'>                    <li>                        <div className='video-img'>                            <img src='https://ps.sfbest.com/mapp/resource/4c/4cf4fb35b2678ea379a0f3f9171e272e.jpg'/>                        </div>                        <p>周三菜谱——酱牛肉</p>                        <div className='sf-footer'>                            <span>滋味浓郁</span>                            <span>肉香爽口</span>                        </div>                    </li>                    </Link>                    <Link to='/menu'>                    <li>                        <div className='video-img'>                            <img src="https://ps.sfbest.com/mapp/resource/05/056e9d7fcb63c7a1e5ec0add5786dc15.jpg"/>                        </div>                        <p>周二菜谱——大阪烧</p>                        <div className='sf-footer'>                            <span>香脆酥软</span>                            <span>日式风味</span>                        </div>                    </li>                    </Link>                </ul>                    </div>                </ReactIScroll>            </div>        )    }}