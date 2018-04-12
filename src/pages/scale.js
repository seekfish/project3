import React, {Component} from 'react';
import './custom.css';
import Zhiwei from "../components/zhiwei";
class Scale extends Component{
	constructor(){
			super();
			this.state={
				detail:"对公司规模可有要求?"			
			}
		}
	
	render(){
		return(
			<div>
			 	<Zhiwei detail={this.state.detail} history={this.props.history}></Zhiwei>
			<ul className="list">
				<li className="item" onClick={(e)=>{this.handleSubmit(e)}}data-index="0" data-sale="没有要求"> 没有要求</li>
		        <li className="item" onClick={(e)=>{this.handleSubmit(e)}}data-index="1" data-sale="初创型( 天使轮及未融资 )">初创型 
		            <em className="desc">( 天使轮及未融资 )</em>
		        </li>
		        <li className="item" onClick={(e)=>{this.handleSubmit(e)}}data-index="2" data-sale="成长型( A轮或B轮融资 )"> 成长型 
		            <em className="desc">( A轮或B轮融资 )</em>
		        </li>
		        <li className="item"onClick={(e)=>{this.handleSubmit(e)}} data-index="3" data-sale="成熟型( C轮融资以上但未上市 )">成熟型
		        	<em className="desc">( C轮融资以上但未上市 )</em> 
		        </li>
		        <li className="item" onClick={(e)=>{this.handleSubmit(e)}}data-index="4" data-sale="上市公司">上市公司</li>
		</ul>
        </div>
			)
			
	}
	handleSubmit(e){
		localStorage.setItem('scale',e.target.dataset.sale)
		this.props.history.push('/customs',{scale:e.target.dataset.sale})
	}
}
export default Scale;