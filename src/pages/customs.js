
import React, {Component} from 'react';
import Header from '../components/header';
import City from './dd.js';
import './custom.css';
import Custom from './custom';
import {
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
class Customs extends Component{
	constructor(){
		super();
		this.state={
			word:"产品经理",
			andress:"请选择工作地点",
			money:"请选择期望薪水",
			scale:"请选择公司规模"
		}
		this.handleBack=this.handleBack.bind(this);
	}
	handleBack(){
		this.props.history.goBack()
	}
	// componentDidMount(){
	// 	if(localStorage.getItem("word")||localStorage.getItem("andress")||localStorage.getItem("money")||localStorage.getItem("scale")){
	// 		this.setState({
	// 		word:localStorage.getItem("word"),
	// 		andress:localStorage.getItem("andress"),
	// 		money:localStorage.getItem("money"),
	// 		scale:localStorage.getItem("scale")

	// 		})
	// 	}else{
	// 		this.setState({
	// 		word:"产品经理",
	// 		andress:"请选择工作地点",
	// 		money:"请选择期望薪水",
	// 		scale:"请选择公司规模"

	// 		})
	// 	}
		
	// }
	componentDidMount(){
		if(this.props.history.location.state){

			if(this.props.history.location.state.word){
				this.setState({
			word:this.props.history.location.state.word})
			}
			if(this.props.history.location.state.andress){
				this.setState({
			andress:this.props.history.location.state.andress
				})
			}
		// this.setState({
		// 	word:this.props.history.location.state.word,
		// 	andress:this.props.history.location.state.andress,
		// 	money:this.props.history.location.state.money,
		// 	scale:this.props.history.location.state.scale
		// })}
	}
}
	render(){
		console.log(this.props.history.location)
		
		return(
			<div className="change">
			 	<Header value="设置定制信息"></Header>
					<div className='backbox'>
						<span className="back" onClick={this.handleBack}></span>
					</div>
				<div className="info_box">
					<p>职位类型</p>
					<Link className="info_to info_to1"  onClick={(e)=>{this.handleClick(e)}} to="/custom">{this.state.word}</Link>
					<p>工作地点</p>
					<Link className="info_to"   onClick={(e)=>{this.handleClick(e)}} to="/andress">{this.state.andress}</Link>
					<p>期望薪水</p>
					<Link className="info_to"  onClick={(e)=>{this.handleClick(e)}} to="/money">{this.state.money}</Link>
					<p>公司规模</p>
					<Link className="info_to"  onClick={(e)=>{this.handleClick(e)}} to="/scale">{this.state.scale}</Link>
				</div>
				<div className="search" onClick={()=>{this.handleSearch()}}>
					开始搜索
				</div>
			</div>
		)
		
	}
	 handleClick(e){
	 	console.log(this.props.history.location.sate)
	 	e.target.innerHTML=this.props.history.location
	 }
	 handleSearch(){
	 	word:localStorage.removeItem("word");
		andress:localStorage.removeItem("andress");
		money:localStorage.removeItem("money");
		scale:localStorage.removeItem("scale");
	 }

}
export default Customs;
				