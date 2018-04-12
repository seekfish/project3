import React, {Component} from 'react';
import {
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

// handleClick(){
// 		window.location='/detail'
// 	}
class Jobs extends Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this)
	}
	render(){
		return(
      			<li className="activeable list-item" onClick={this.handleClick} data-positionid={this.props.curr.positionId} data-companyid={this.props.curr.companyId}>
		            <img src={"//static.lagou.com/"+this.props.curr.companyLogo} className="item-logo" />
		            <div className="item-desc">
		                <h2 className="item-title">{this.props.curr.companyName}</h2>
		                <p className="item-info">
		                    <span className="item-pos">
		                        {this.props.curr.positionName}  [{this.props.curr.city}]
		                    </span>
		                    <span className="item-salary">{this.props.curr.salary}</span>
		                </p>
		                <p className="item-time">{this.props.curr.createTime}</p> 
		            </div> 
	       		</li>   
		)
	}
	handleClick(){
		this.props.history.push("/detail",this.props.curr.positionId);

	}
}
export default Jobs;
