
import React, {Component} from 'react';
import './Search.css';
import City from './search_city';
import axios from 'axios';
import Jobs from './jobs';
import './job.css';
class Search extends Component{
	constructor(){
		super();
		this.state={
			list:[{city:'热门城市',citys:['北京','上海','广州','深圳','成都','杭州']},
			{city:'ABCDEF',citys:['澳门特别行政区','保定','北海','深圳','成都','杭州','杭州']},
			{city:'GHIJKL',citys:['北京','上海','广州','深圳','成都','杭州']},
			{city:"NMOPQRST",citys:['北京','上海','广州','深圳','成都','杭州']},
			{city:'UVWXYZ',citys:['北京','上海','广州','深圳','成都','杭州']}],
			style:{"display":"none"},
			Ct:'全国',
			value:"",
			detail:[],
			style2:{"display":"block"},
			dom:[]
		};
		this.handleShow=this.handleShow.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.handleSearch=this.handleSearch.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
	}
	componentWillMount(){
		var Ege=/^\$/;
		var a=[],b=null;
		 for(var key in localStorage){
		 	if(Ege.test(key)){
		 		b=localStorage[key];
		 		key=key.slice(1)
		 		 this.state.detail.push([key,b])	
		 	}
		 }
		 this.state.detail.sort();
	}

	render(){
		var list=this.state.list.map((curr,index)=>{
			 return <City city={curr.city} key={index}  onclick={this.handleClick}  citys={curr.citys}></City>
		})
		var html=this.state.detail.map((curr,index)=>{
			return <li className="city_li" key={index}>{curr}
					<div onClick={this.handleDelete} data-city={curr}>
					
						<span onClick={this.handleDelete} data-city={curr}></span>
					</div>
			</li>
		})
			var hpp=this.state.dom.map((curr,index)=>
					<Jobs curr={curr} key={index} history={this.props.history}></Jobs>
				)
		return (
				<div className="box">
					<div className="linputer">
			            <div className="lbutton" onClick={this.handleShow}>
			                <span className="city" >{this.state.Ct}</span>
			                <span className="cityicon"></span>
			            </div>
			            <div className="rinput">
				                <input className="inputer" type="text" value={this.state.value} placeholder="搜索职位或公司" onChange={this.handleChange}/>
				                <span className="search" onClick={this.handleSearch}><em className="searchicon"></em></span>
				        </div>
			        </div>
			        <div className="sech_all " style={this.state.style}>
			        	{list}
			        </div>
			        <ul style={this.state.style2}>
			        	{html}
			        </ul> 
			          <ul className="list">{hpp}</ul>
				</div>
			)
	}
	handleChange(e){
		this.setState({
			value:e.target.value
		})
	}
	handleShow(){
		let show={"display":"block"};
		this.setState({
			style:Object.assign({},this.state.style,show)
		})
		
	}
	handleClick(val){
		let hide={"display":"none"};
		this.setState({
			style:Object.assign({},this.state.style,hide),
			Ct:val
		})
	}
	handleSearch(){
		let hide={"display":"none"}
		let city=this.state.Ct;
		let value=this.state.value;
		localStorage.setItem("$"+city,value);
		this.state.detail.unshift(city+value);
		this.setState({
			detail:this.state.detail,
			style2:Object.assign({},this.state.style2,hide)
		})
		axios.post("/app/search",{value}).then((data)=>{
			this.setState({
				dom:data.data.msg
			});
		})
		
	}
	handleDelete(e){
		var a=e.target.dataset.city;
		var b=a.split(",")
		localStorage.removeItem("$"+b[0]);
		var Ege=/^\$/;
		var a=[],b=null;
		 for(var key in localStorage){
		 	if(Ege.test(key)){
		 		b=localStorage[key];
		 		key=key.slice(1);
		 		 a.push([key,b])	
		 	}
		 }
		 this.setState({
		 	detail:a
		 })
	}
}
export default Search;
