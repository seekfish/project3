

import React, {Component} from 'react';
	
	class Input extends Component{
		constructor(){
			super();
			this.handleChange=this.handleChange.bind(this)
		}
		render(){
			var {type,ph,className,value}=this.props;
			return (
					<div className="input_label">
						<input type={type} onChange={this.handleChange} placeholder={ph} className={"input_text " + className} value={value} />
					</div>
				)
			}
			handleChange(e){
				this.props.onchange(e.target.value)
			}
		}

export default Input;