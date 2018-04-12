import React, {Component} from 'react';
class Header extends Component{
	constructor(){
		super();
	}

	render(){
		return (
				<header className="App-header">
                   <p>{this.props.value}</p>
            	</header>
			)
			
	}
}
export default Header;