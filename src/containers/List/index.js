import React,{Component} from "react";
import Header from '../../component/Header/index'
import Tab from '../../component/Tab/index'
import {connect} from "react-redux"
import actions from "../../store/actions/list"
import './index.less';
import {Link} from 'react-router-dom';

 class List extends Component{
    componentDidMount(){
        this.props.fetchLists();
    }
    render(){
        let dataLists=this.props.listDatas;
        return(
            <div>
                <Header/>
                <ul>
                    {
                        dataLists&&dataLists.map((item,index)=>(
                            <li key={index}>
                                <Link key={index} to={{pathname:`/list/classification/${item.title}`}}>

                                    <img src={item.listImg} alt=""/>
                                    <h3>{item.title}</h3>
                                    <p>{item.mark}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Tab/>
            </div>
        )
    }
}
export default connect(
    state=>state.list,
    actions
)(List);
