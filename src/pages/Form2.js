
import React, {Component} from 'react';
import Input from './input';
import Regist from "./regist";
import axios from 'axios';
import {
  BrowserRouter as Router,//导入一个最外层路由切换的模式即:路径模式
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

//<Input type="text" ph='请证明你不是机器人' className='pcode_input'></Input>
class Form2 extends Component{
	constructor(){
		super();
		this.state={
			User:'',
			Pwd:'',
		};
		this.handleLogin=this.handleLogin.bind(this);
		this.handleChangeUsernam=this.handleChangeUsernam.bind(this);
		this.handleChangePwd=this.handleChangePwd.bind(this);
	}
	render(){
		return (
				<section className="form_container">
					<header className="form_header">
						<h2>登录拉勾</h2>
							<Route path="/regist" component={Regist}></Route>
							<Link to="/regist" className="brother_link">注册</Link>
						
					</header>
				<Input type="text" ph='请输入注册的用户名' value={this.state.User} className='user_input'  onchange={this.handleChangeUsernam}></Input>
				<Input type="password" ph='请输入密码' value={this.state.Pwd} className='password_input' onchange={this.handleChangePwd}></Input>
					<div className="zhanwei"></div>
					<input type="submit" className='submit_btn' value="登录" onClick={this.handleLogin} />
					<div className="form_footer">
						<Link to="/login/phone">手机号登录</Link>
			
					</div>
					
				</section>
			)
	}
	handleLogin(){
		let user=this.state.User,pwd=this.state.Pwd;
		axios.post('/app/login',{user,pwd}).then((val)=>{
			this.props.history.push('/main')
		});
		localStorage.setItem("userId",user);
	}
	handleChangeUsernam(val){
		this.setState({
			User:val
		})
	}
	handleChangePwd(val){
		this.setState({
			Pwd:val
		})
	}
}
export default Form2;