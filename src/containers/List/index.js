import React,{Component} from "react";
import {connect} from "react-redux"
import actions from "../../store/actions/list"
 class List extends Component{
    componentDidMount(){
        this.props.fetchLists();
    }
    render(){
        let dataLists=this.props.listDatas;
        return(
            <div>
                <ul>
                    {
                        dataLists&&dataLists.map((item,index)=>(
                            <li key={index}>
                                <img src={item.listImg} alt=""/>
                                <h3>{item.title}</h3>
                                <p>{item.mark}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state=>state.list,
    actions
)(List);
