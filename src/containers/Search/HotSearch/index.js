import React,{Component} from "react";
import "./index.less"
//热门搜索
export default class HotSearch extends Component{
    HotSearch=(hotSearch)=>(
        hotSearch.map((item,index)=>(
            <li key={index} className="hotSearch-item">
                {!this.props.searchFlag&&<b>{index+1}</b>}
                <span onClick={()=>this.props.fetchSearch(item)}>{item}</span>
            </li>
        ))
    );
    render(){
        return(
            <div>
                <ul className="hotSearch">
                    {
                        this.props.hotSearch&&this.HotSearch(this.props.hotSearch)
                    }
                </ul>
                {this.props.searchFlag&&<div onClick={()=>this.props.fetchHistory("clear")} className="clearBtn">清空历史搜索</div>}
            </div>
        )
    }
}