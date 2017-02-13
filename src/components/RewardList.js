/**
 * Created by tan on 2017/2/10.
 */
//问题列表展示组件
import React from 'react'


export  default  class RewardList extends React.Component
{
  render()
  {
    const {rewards}=this.props;
    return (
      <div className="rewards">
        <div className="head"><a style={{paddingLeft:0.5+'rem'}} href="">最新</a> | <a href="">已解答</a></div>
      <ul className="rewards-list">
        {rewards}
      </ul>
      </div>
    )
  }
}
