/**
 * Created by tan on 2017/2/10.
 */
import React from 'react'

//分类标签列表展示组件
export  default class RewardTagList extends React.Component
{
  render()
  {
    const {rewardtags}=this.props;
    return (
      <ul>
        {rewardtags}
      </ul>
    )
  }
}
