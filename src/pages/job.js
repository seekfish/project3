import React, {Component} from 'react';
import './job.css';
import axios from 'axios';
import Jobs from './jobs';
class Job extends Component{
	constructor(){
		super();
		this.state={
			seek:[],
			title:"去登录"
		};
		this.handleLogin=this.handleLogin.bind(this);
	}
	
	componentWillMount(){
		axios.post('/app/job').then((res)=>{
			this.setState({
				seek:res.data.msg
			})
		});
		if(localStorage.getItem('userId')){
			this.setState({
				title:"编辑"
			})
		}
	}
		
	render(){
			var html=this.state.seek.map((curr,index)=>{
				return <Jobs curr={curr} history={this.props.history} key={index}></Jobs>
			})
		return (
				<div className="box">
					<div className="custom-info none">
	                      <span className="ainfo">
	                          10秒钟定制职位
	                      </span>
	                      <p className="go">
	                          <em className="icon"></em>
	                          <em className="text" onClick={this.handleLogin}>{this.state.title}</em>
	                      </p>
                      </div>
                     <ul className="list">
                      	{html}
                      </ul>
                  </div>
			)
	}
	handleLogin(){
		if(this.state.title=="去登录"){
			this.props.history.push('/login');
		}
		if(this.state.title=="编辑"){
			this.props.history.push('/customs');
		}
	}

}
export default Job;