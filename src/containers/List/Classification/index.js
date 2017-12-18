import React,{Component} from 'react';
import Header from '../../../component/Header/index'
import {Link} from 'react-router-dom'
export default class Classification extends Component{
    render(){
        return(
            <div>
               <Header/>
                <div>
                    <span>热卖</span>
                    <span>价格</span>
                    <span>好评</span>
                    <span>产地</span>
                </div>

                <ul>
                    <li>
                        <Link  to=''>
                            <img src={require('../image/product1.jpg')} alt=""/>

                        </Link>

                    </li>


                </ul>
            </div>
        )
    }
}
