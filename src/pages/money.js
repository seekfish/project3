import React, {Component} from 'react';
import './custom.css';
import Zhiwei from "../components/zhiwei";
import City from './search_city';
class Li extends Component{
	constructor(){
			super();
		}
	render(){
		return (
				<li  onClick={(e)=>{this.handleClick(e)}} className={this.props.name} data-index={this.props.index} >{this.props.details}</li>
			)
	}
	handleClick(e){
		console.log(e.target.innerHTML)
		this.props.onclick(e.target.innerHTML)
	}
}
class Money extends Component{
	constructor(){
			super();
			this.state={
				detail:"你值得更好的生活,你期望的薪水",
				details:[
					"没有要求",
					"2k以下",
					"2k-5k",
					"5k-10k",
					"10k-15k",
					"15k-25k",
					"25k-50k",
					"50k以上",
				]
			}
		}
	
	render(){
		var list=this.state.details.map((curr,index)=>{
			return <Li onclick={(e)=>{this.handleSubmit(e)}} details={curr} key={index} name='activeable item' index={index}></Li>
		})
		return(
			<div>
			 	<Zhiwei detail={this.state.detail} history={this.props.history}></Zhiwei>
			 	<ul className="list">
				 	{list}
			 	</ul>
        	</div>
			)
			
	}
	handleSubmit(val){
		localStorage.setItem('money',val)
		this.props.history.push('/customs',{money:val})
	}
}
export default Money;