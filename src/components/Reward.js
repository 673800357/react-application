/**
 * Created by tan on 2017/2/10.
 */
import React from 'react'
import {Link} from 'react-router'

//单个问题的首页显示展示组件
export default class Reward extends React.Component
{
  render()
  {
    const {askuser,money,content,first,lefttime,answercount,answertime,url,inde,src}=this.props;

    return (
      <li className="reward">
        <div className="reward-header">
        <div className="user">
          {askuser}
        </div>
        <div className="money">
          ¥{money}
        </div>
        </div>
        <Link  to={{pathname:url,state:{index:inde,content:content,askuser:askuser,lefttime:lefttime,answercount:answercount,money:money,src:src}}}>
          <div className="reward-body">{content}</div>
          <div className="status"><span>还剩{lefttime}小时</span><span>{answercount>0?`${answercount}人已抢答`:``}</span></div>
        </Link>
        <div className="reward-footer">
          <span className="reward-tip">{first?`${first.answer} | ${first.answerwork}`:``}</span><span>{answertime}</span>
        </div>
      </li>
    )
  }
}
