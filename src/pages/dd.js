
import React, {Component} from 'react';

class City extends Component{
	constructor(){
		super();
		this.handleClick=this.handleClick.bind(this);
	}
	render(){
		return (
			<dd data-code={this.props.code} onClick={this.handleClick}>{this.props.city}</dd>
			)
			
	}
	handleClick(e){
		 this.props.onclick(e.target.dataset.code);
	}
}
export default City;