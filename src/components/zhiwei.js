import React, {Component} from 'react';
import Header from "./header";
class Zhiwei extends Component{
	constructor(){
		super();
		this.handleBack=this.handleBack.bind(this);
	}

	render(){
		return (
			<div>
				<Header value="设置定制信息"></Header>
					<div className='backbox'>
						<span className="back" onClick={this.handleBack}></span>
				</div>
				<div className="info">
		            <span className="text">
		                <em className="left"></em>
		                   {this.props.detail}	           
		           		 <em className="right"></em>
		            </span>
        		</div>
        	</div>
			)
			
	}
	handleBack(){
		this.props.history.goBack()
	}
}
export default Zhiwei;