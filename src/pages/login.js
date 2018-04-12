import React, { Component } from 'react';
import "./login.css";
import Form1 from './form1';
import Form2 from './Form2';
import {
  BrowserRouter as Router,//导入一个最外层路由切换的模式即:路径模式
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
 //<Form1></Form1>
class Login extends Component {
  render() {
    return (
		<div >
		<Switch>
			<Route path="/login/email" component={Form2}></Route>
			<Route path="/login/phone" component={Form1}></Route>
			<Redirect path='/login' to="/login/email" exact></Redirect>
		 </Switch>
		</div>
    )
  }
}

export default Login;
