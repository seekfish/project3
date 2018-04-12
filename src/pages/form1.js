
import React, {Component} from 'react';
import Country from './dt';
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
class Form1 extends Component{
	constructor(){
		super();
		this.state={
			Cap:[
				{name:"常用",
				city:[{
					ct:"中国",code:"0086"
				},{
					ct:"中国香港",code:"00852"
				},{
					ct:"中国台湾",code:"00886"
				},{
					ct:"中国澳门",code:"00853"
				},{
					ct:"美国",code:"001"
				}]},

				{name:"A",
				city:[{
					ct:"澳大利亚",code:"0061"
				},{
					ct:"中国澳门",code:"00853"
				}]},

				{name:"B",city:[{
					ct:"巴西",code:"0055"
				}]},
				{name:"D",city:[{
					ct:"德国",code:"0049"
				}]},
				{name:"E",city:[{
					ct:"俄罗斯",code:"007"
				}]},
				{name:"H",city:[{
					ct:"韩国",code:"0033"
				}]},
				{name:"J",city:[{
					ct:"加拿大",code:"0082"
				}]},
				{name:"M",city:[{
					ct:"马来西亚",code:"0060"
				},{
					ct:"美国",code:"001"
				}]},
				{name:"R",city:[{
					ct:"日本",code:"0081"
				}]},
				{name:"T",city:[{
					ct:"中国台湾",code:"00886"
				},{
					ct:"泰国",code:"0066"
				}]},
				{name:"S",city:[{
					ct:"中国香港",code:"00852"
				},{
					ct:"新加坡",code:"0065"
				}]},
				{name:"Y",city:[{
					ct:"印度",code:"0091"
				},{
					ct:"英国",code:"0044"
				}]},
				{name:"Z",city:[{
					ct:"中国",code:"0086"
				}]}
			],
			Ct:"0086",
			User:'',
			Pwd:'',
		};
		this.handleShow=this.handleShow.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.handleLogin=this.handleLogin.bind(this);
		this.handleChangeUsernam=this.handleChangeUsernam.bind(this);
		this.handleChangePwd=this.handleChangePwd.bind(this);
	}
	render(){
		 var list=this.state.Cap.map((curr,index)=>{
		 	return <Country name={curr.name} onclick={this.handleClick} city={curr.city} code={curr.code} key={index}></Country>
		 	
	 });
		return (

				<section className="form_container">
					<header className="form_header">
					<h2>登录拉勾</h2>
						<Route path="/regist" component={Regist}></Route>
						<Link to="/regist" className="brother_link">注册</Link>

					</header>
					
			
				<div className="input_label phone_wrapper">
					<span className="area_code" onClick={this.handleShow}>{this.state.Ct}</span>
					<div className="area_code_list">
					    <dl className="code_list_main">
						    {list}
						    <p className="tips">如果没有找到你所在的归属地，
						    <br />请拨打客服电话
						    <a href="tel:4006282835">4006282835
						    </a> 解决。
					    </p>
					    </dl>
				    </div>
				   	<Input type="text" ph='常用手机号' value={this.state.User} className='user_input'  onchange={this.handleChangeUsernam}></Input>
			    </div>
				<Input type="password" ph='请输入密码' value={this.state.Pwd} className='password_input' onchange={this.handleChangePwd}></Input>
					<div className="input_label">
						<input type="text" placeholder="请证明你不是机器人" className="input_text pcode_input" />
						<img src="https://passport.lagou.com/vcode/create?from=login" className="pcode_img" width="2" height="2" alt="图片验证码" />
						<a className="pcode_link">换一张</a>   
					</div>
				<input type="submit" className='submit_btn' value="登录" onClick={this.handleLogin} />
				<div className="form_footer">
					<Link to="/login/email">账号登录</Link>
				</div>
				
			</section>
			)
	}
	handleShow(){
		console.log(document.querySelector('.area_code_list'))
		document.querySelector('.area_code_list').style.display="block";
		}
	handleClick(val){
		console.log(val)
		this.setState({
			Ct:val
		})
		document.querySelector('.area_code_list').style.display="none";
	}
	handleLogin(){
		let user=this.state.User,pwd=this.state.Pwd;
		axios.post('/app/login',{user,pwd}).then(function(val){
			console.log(val.data.msg)
		})
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
export default Form1;