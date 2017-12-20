import React,{Component} from 'react';import ReactIScroll from 'react-iscroll';let iScroll = require('iscroll'); import {Link} from 'react-router-dom'import './index.less'export default class Nav extends Component{    render(){        return (            <div className='scroll'>                <ReactIScroll  iScroll={iScroll}                               options={{mouseWheel: false,                                   scrollX: true,                                   momentum:true,                                   freeScroll: true,                                   disablePointer: true,                                   disableTouch:false,                                   disableMouse:false}}>                    <div style={{width:'200%'}}>                        <ul className='navList'>                            {                                this.props.navImages.length>0&&this.props.navImages.map((item,index)=>(                                    <Link key={index} to='/list'>                                        <li>                                            <img src={item.navigationImg} alt=""/>                                            <span>{item.navigationTitle}</span>                                        </li>                                    </Link>                                ))                            }                        </ul>                    </div>                </ReactIScroll>            </div>        )    }}