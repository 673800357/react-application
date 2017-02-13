/**
 * Created by tan on 2017/2/13.
 */
import React from 'react'


//每个人的信息
export default  class People extends React.Component {
  constructor()
  {
    super();
    this.state={follow:false}
    this.click=this.click.bind(this);
  }
  click()
  {
    this.setState({follow:!this.state.follow})
  }
  render()
  {
      const {title,nickname,src}=this.props;
      let follow;
      this.state.follow?follow=<div onClick={this.click} className="followed">已收听</div>:follow=<div onClick={this.click} className="follow"><img className="btn-follow" src={require('../images/hear.png')}/><span>收听</span></div>
      return (
        <li>
          <img src={require(`../images/${src}.jpg`)}/>
          <p>{nickname}</p>
          <p className="desc">{title}</p>
          {follow}
        </li>
      )
  }
}

