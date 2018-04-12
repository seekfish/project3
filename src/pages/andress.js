import React, {Component} from 'react';
import './custom.css';
import Zhiwei from "../components/zhiwei";
import City from './search_city';
class Andress extends Component{
	constructor(){
			super();
			this.state={
				detail:"告诉我你期望的工作地点",
				list:[{city:'热门城市',citys:['北京','上海','广州','深圳','成都','杭州']},
				{city:'ABCDEF',citys:['澳门特别行政区','保定','北海','深圳','成都','杭州','杭州']},
				{city:'GHIJKL',citys:['北京','上海','广州','深圳','成都','杭州']},
				{city:"NMOPQRST",citys:['北京','上海','广州','深圳','成都','杭州']},
				{city:'UVWXYZ',citys:['北京','上海','广州','深圳','成都','杭州']}],
				style:{"display":"block","position":"relative"},
				andress:""
			};
			this.handleClick=this.handleClick.bind(this)
		}
	
	render(){
		var list=this.state.list.map((curr,index)=>{
			 return <City city={curr.city} key={index}  onclick={this.handleClick}  citys={curr.citys}></City>
		})
		return(
			<div>
			 	<Zhiwei detail={this.state.detail} history={this.props.history}></Zhiwei>
				<div className="sech_all " style={this.state.style}>
			        	{list}
			        </div>
        	</div>
			)
		}	
	handleClick(val){
		this.setState({
			andress:val
		},function(){
			localStorage.setItem('andress',this.state.andress)
			this.props.history.push('/customs',{andress:this.state.andress})
		})
		
	}
}
export default Andress;