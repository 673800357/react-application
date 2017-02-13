/**
 * Created by tan on 2017/2/10.
 */
import React from 'react'


//单个问题的详细内容显示展示组件
export default class Reply extends React.Component
{
  render()
  {
    const {name,work,listencount,praisecount,time,content}=this.props;
    let showContent;
    if (content==="voice")
      showContent=(<div className="test">
        <span className="bot"></span>
        <span className="top"></span>
        点击播放 60"
      </div>);
    else showContent=content;
    return (
      <li className="reply">
        <div className="reply-header"><div className="user">{`${name} | ${work}`}</div></div>
        <div className="reply-content"><p>{showContent}</p></div>
        <div className="reply-footer">
          <span className="time">{time}</span>
          <span className="count"><i className="glyphicon glyphicon-thumbs-up"></i>{praisecount}</span>
          <span className="count">听过{listencount}</span>
        </div>
      </li>
    )
  }
}
