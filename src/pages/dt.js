
import React, {Component} from 'react';
import City from './dd.js';
class Country extends Component{
	render(){
		let list=this.props.city.map((curr,index)=>{
			return <City  city={curr.ct} onclick={this.props.onclick} code={curr.code} key={index}></City>
		})
		return(
			<div>
			<dt>{this.props.name}</dt>
			{list}
			</div>
		)
		
	}
}
export default Country;