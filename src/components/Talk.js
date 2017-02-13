/**
 * Created by tan on 2017/2/7.
 */
import React from "react"
import {Link} from 'react-router'

//data模拟数据


export default  class Talk extends React.Component {

  constructor(props) {
    super(props);
    this.btn = null;
    this.head = null;
  }

  componentWillMount() {

    if (this.props.hot == true)
    {
      if (this.props.number<3)
      this.btn =<button className="btn btn-default" style={{float:"right",marginBottom:0.5+"rem"}}> <span className="glyphicon glyphicon-play"></span></button>;
      else this.btn=null;
    }
    else {
      this.btn = <span className="btn btn-primary" style={{float:"right"}}>去答</span>
      this.head = (
        <div className="talk-header">
          <img style={{
            height: 1.35 + 'rem',
            width: 1.35 + 'rem',
            display: 'inline-block',
            float: "left",
            borderRadius: 50 + '%',
          }} src={require('../images/main1.jpg')}/>
          <p>分答时刻 | 说出你的故事</p>
        </div>
      )
    }
  }
  componentDidMount()//前3个加图标
  {

  }
    render()
    {
      const { title,listencount , url}=this.props;
      let answercount=require(`../data0/${url}.json`).length;
      return (
        <div className="talk-item">
          <Link ref="append" to={{pathname:`/talk/${url}`,state:{title:title,url:url,listencount:listencount,answercount:answercount}}}>

            <h5>{this.head}</h5>
            <p className="talk-content">{title}</p>
            <span className="talk-footer">{answercount}人回答 ・ {listencount}人听过</span>
            {this.btn}
          </Link>
        </div>
      )
    }


}
