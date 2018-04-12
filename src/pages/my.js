
import React, {Component} from 'react';
import Login from './login';
import Regist from './regist';
import './my.css';
import {
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

class My extends Component{
	constructor(){
		super();
		this.state={
			style:{
				"display":"none"
			},
			style1:{
				"display":"block"
			},
	       	main:"/main"
		};
		this.handleClick=this.handleClick.bind(this)
	}
	componentWillMount(){
		if(localStorage.getItem('userId')){
			this.setState({
				style:{
					"display":"block"
				},
				style1:{
					"display":"none"
				}
			})
		}
	}
	render(){
		let a=localStorage.getItem('userId');
		console.log(this.props.history)
		return (
				<div>
					<div className="link_to" style={this.state.style1}>
						<Link to="/login" className="link_to_a1">登录/</Link>
						<Link to="/regist" className="link_to_a2">注册</Link>
					</div>
					<div style={this.state.style} className="box2">你好:{a}</div>
					<div className="link_to2">
						<Link to="/login" className="link_to_a">投递</Link>
						<Link to="/login" className="link_to_a">面试</Link>
						<Link to="/login" className="link_to_a">邀约</Link>
						<Link to="/login" className="link_to_a">收藏</Link>
					</div>
					<button className="btn" onClick={this.handleClick} style={this.state.style}>退出登录</button>
				</div>
			)
	}
	handleClick(){
		localStorage.removeItem('userId');
		this.setState({
				style:{
					"display":"none"
				},
				style1:{
					"display":"block"
				}
			})
		this.props.history.push(this.state.job);

	}
}
export default My;