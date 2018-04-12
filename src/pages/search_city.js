import React, {Component} from 'react';

class Td extends Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
	}
	render(){
		return ( 
    	 			<td onClick={this.handleClick} data-city={this.props.city}>{this.props.city}</td>
			)
	}
	handleClick(e){
		this.props.onclick(e.target.dataset.city)
	}
}
class Tr extends Component{
	constructor(){
		super();
		
	}
	render(){
		var html=this.props.citys.map((curr,index)=>{
				return <Td city={curr} onclick={this.props.onclick} key={index}></Td>
		})
		return ( 
				
    	 			<tr>
    	 				{html}
    	 			</tr>
			)
	}

}

class City extends Component{
	constructor(){
		super();
	}
	render(){
		var data=this.props.citys,result=[];
		for(var i=0,len=data.length;i<len;i+=3){
   			result.push(data.slice(i,i+3))
   			var html=result.map((curr,index)=>{
   				return <Tr key={index} onclick={this.props.onclick} citys={curr}></Tr>
   			})
   		}
		return (
				<div className="city-all">
		        	 <div className="hot_city">{this.props.city}</div>
		        	 <table className="citys">
		        	 <thead>
		        	 </thead>
		        	 	<tbody>
		        	 	{html}
						</tbody>
		        	 </table>
				</div>
			)
	}
}
export default City;