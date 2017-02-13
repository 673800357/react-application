/**
 * Created by tan on 2017/2/10.
 */

import React from 'react'

//回答列表展示组件
export  default  class RewardList extends React.Component
{
  render()
  {
    const {replys}=this.props;
    return (
      <ul className="reply-list">
        {replys}
      </ul>
    )
  }
}
