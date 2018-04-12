import React, { Component } from 'react';
import './Main.css';
import Job from './job';
import Search from './Search';
import My from './my';
import Login from './login';
import Header from '../components/header';
import {
  BrowserRouter as Router,//导入一个最外层路由切换的模式即:路径模式
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

class Main extends Component {
  constructor(){
    super();
    this.state={
      userId:'',
      search:"/Main/Search",
      job:"/Main/job",
      my:"/Main/my"
    }
  }
  //加载前
  componentWillMount(){
    let a=localStorage.getItem("userId");
    console.log(a)
    if(a){
      console.log(1)
        this.setState({
        search:this.state.search+"/:"+a,
        job:this.state.job+"/:"+a,
        my:this.state.my+"/:"+a
      })
    }else{
      console.log(2)
        this.setState({
           search:"/Main/Search",
           job:"/Main/job",
           my:"/Main/my"  
        })
      };
  }
  
  render() {
    console.log(this.props)
    console.log(3)
    return (
        <div className="App">
            <Header value="拉勾网"></Header>
            <div className="main">
                  <Switch>
                    <Route path={this.state.job} component={Job}></Route>
                    <Route path={this.state.search} component={Search}></Route>
                    <Route path={this.state.my} component={My}></Route>
                    <Redirect path="/main" to={this.state.job}  exact></Redirect>
                </Switch>
            </div> 
                  <ul className="footNav">
                      <li>
                         <NavLink activeClassName="index_active" to={this.state.job}>职位</NavLink>
                      </li>
                      <li>
                          <NavLink activeClassName="index_active" to={this.state.search}>搜索</NavLink>
                      </li>
                      <li>
                          <NavLink activeClassName="index_active" to={this.state.my}>我的</NavLink>
                      </li>
                  </ul>
                <Route path="/my/login" component={Login}></Route>
                
          </div>
    )
  }
}

export default Main ;
