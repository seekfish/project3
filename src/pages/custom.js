import React, {Component} from 'react';
import './custom.css';
import Zhiwei from "../components/zhiwei";
class Custom extends Component{
	constructor(){
		super();
		this.state={
			detail:"想找什么职位",
			_word:''
		};
	}
	render(){
		return(
			<div>
			 	<Zhiwei detail={this.state.detail} history={this.props.history}></Zhiwei>
        		<div id="rinputer">
        			<div className="rinputer">
        			<input className="inputer" onChange={(e)=>{this.handleChange(e)}} value={this.state._word} placeholder="输入你想定制的职位" />
        			<span className="button" onClick={()=>{this.handleSubmit()}}>OK</span>
        		</div>
        			<ul className="predata">
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="产品经理" data-index="0">产品经理</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="Java" data-index="1">Java</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="运营" data-index="2">运营</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="Android" data-index="3">Android</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="PHP" data-index="4">PHP</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="UI" data-index="5">UI</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="IOS" data-index="6">IOS</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="编辑" data-index="7">编辑</li>
	        			<li onClick={(e)=>{this.handleClick(e)}} className="item" data-word="BD" data-index="8">BD</li>
	        		</ul>
        			</div>
			</div>
		)
		
	}
	handleClick(e){
		let _word=e.target.dataset.word;
		this.setState({
			_word:_word
		})
	}
	handleChange(e){
		let a=e.target.value;
		console.log(a)
		this.setState({
			_word:a
		})
	}
	handleSubmit(){
		localStorage.setItem('word',this.state._word)
		this.props.history.push('/customs',{word:this.state._word})
	}
}
export default Custom;