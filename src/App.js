import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import Login from './pages/login';
import Regist from './pages/regist';
import Detail from './pages/detail';
import Customs from "./pages/customs";
import Custom from "./pages/custom";
import Andress from "./pages/andress";
import Money from "./pages/money";
import Scale from "./pages/scale";
import {
  BrowserRouter as Router,//导入一个最外层路由切换的模式即:路径模式
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/main" component={Main}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/regist" component={Regist}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/customs" component={Customs}></Route>
                <Route path='/custom' component={Custom}></Route>
                <Route path='/andress' component={Andress}></Route>
                <Route path='/money' component={Money}></Route>
                <Route path='/scale' component={Scale}></Route>
                <Redirect path="/" to="/main" exact></Redirect>
            </Switch> 
          </div>  
      </Router>
    )
  }
}

export default App;
