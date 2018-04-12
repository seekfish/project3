
import React, {Component} from 'react';
import Header from '../components/header';
import './detail.css';
import {
  Route,//路由切换的坑
  Link,//模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';
class Detail extends Component{
	constructor(){
		super();
		this.handleBack=this.handleBack.bind(this)
	}
	handleBack(){
		this.props.history.goBack()
	}
	render(){
		console.log(this.props.location.state);
		return (
		<div>
			<Header value="职位详情"></Header>
			<div className='backbox'>
				<span className="back" onClick={this.handleBack}></span>
			</div>
			
			<div id="content">
		        <div className="postitle">
		            <h2 className="title">移动广告投放专员</h2>
		            <div className="collicon activeable">
		                <span className="icon notcoll"></span>
		                <span className="text"> 未收藏 </span>
		            </div>
		        </div>
		        <div className="detail">
		            <div className="items">
		                  <span className="item salary">
		                        <em className="icon"></em>
		                        <span className="text">5k-10k</span>
		                   </span>
		                   <span className="item workaddress">
		                        <em className="icon"></em>
		                        <span className="text">广州</span>
		                    </span>
		                    <span className="item jobnature">
		                        <em className="icon"></em>
		                        <span className="text">全职</span>
		                    </span>
		                    <span className="item workyear">
		                        <em className="icon"></em>
		                        <span className="text">1-3年</span>
		                    </span>
		                    <span className="item education">
		                        <em className="icon"></em>
		                     	<span className="text">大专及以上 </span>
		                    </span>
		                </div>
			           { /*诱惑 */}
			            <div className="temptation">
			                职位诱惑：职业晋升,技能培训,团队年轻
			            </div>
	    		</div>
		        <div className="company activeable" data-lg-tj-id="19v6" data-lg-tj-no="0030" data-lg-tj-cid="191127">
		            <img src="//static.lagou.com/i/image/M00/10/A5/CgpEMljrTjyARX2XAABlIH6GCeA608.png" alt="" className="logo" />
		            <div className="desc">
		                <div className="dleft">
		                    <h2 className="title">
		                        广州箭速软件科技有限公司
		                    </h2>
		                    <p className="info">
		            移动互联网</p>
		                </div>
		                <span className="dright"></span>
		            </div>
		        </div>
		        <div className="positiondesc">
		            <header className="header">
		                职位描述
		            </header>
		            <div className="content">
		             <p>岗位职责：</p>
					<p>1、负责信息流广告投放，帮助客户制定创意投放策略和方案；</p>
					<p>2、监控和分析投放数据，与客户保持投放效果沟通，围绕数据分析持续优化和调整投放方案；</p>
					<p>3、不断挖掘客户需求感受，提升广告运营效果，为改进运营提供建议性意见；</p>
					<p><br /></p>
					<p>任职要求：</p>
					<p>1、全日制大专及以上学历，电子商务、市场营销、广告学等相关专业；</p>
					<p>2、一年以上网络营销或移动广告投放经验；</p>
					<p>3、拥有流量运营经验，熟悉信息流广告投放，拥有一定的人群消费需求心理洞察能力；</p>
					<p>4、具有良好的创意策划和图片处理能力；优秀的文字撰写能力和文字功底，有SEM、有网络推广经验，熟悉微信运营推广优先；</p>
					<p>5、有良好的表达能力和沟通能力，能够承担一定的工作压力；</p>
					<p>6、有DSP、新浪、腾讯、今日头条等移动广告平台投放经验优先。</p>
		            </div>
		        </div>
		        <div className="positioneval">
		            <div className="eval-title">
		                面试评价
		                    <span id="total">(<span>0</span>)</span>
		            </div>
		            <ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
		            <a className="eval-all" href="/user/expsList_4153170.html"></a>   
	        	</div>
		        <div className="fix_btn_group">
		       		 投递简历
		        </div>
			</div>
		</div>
			)
			
	}

}
export default Detail;