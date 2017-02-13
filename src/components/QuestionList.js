/**
 * Created by tan on 2017/2/8.
 */
import React from 'react';
class Answer extends React.Component//每一个回答
{
  render()
  {
    const {name,work,content,time,listencount,praisecount}=this.props.itemData;
    return (
      <div className="answer">
        <div className="answer-head">
          <p className="user">{name} | {work}</p>
        </div>
        <div className="answer-content">
          <p className="content">{content}</p>
        </div>
        <div className="answer-footer">
          <span>{time}</span>
          <span className="count"><i className="glyphicon glyphicon-thumbs-up"></i>{praisecount}</span>
          <span className="count">听过{listencount}</span>

        </div>
      </div>
    )
  }
}


export default class QuestionList extends React.Component
{
  constructor()
  {
    super();

  }

  render()
  {
    const {listencount,answercount,detailData}=this.props;
    let detail=[];
    detailData.forEach((item,index)=>{
      detail.push(<Answer key={index} itemData={item}/>)
    });
    return (
      <div>
      <div className="talk-nav">
        <p className="count">{answercount}人已答 ・ 听过{listencount}</p>
        <div className="sort-item"><a className="item">精选</a> | <a>最新</a></div>
      </div>
        <div className="question-list">
        {detail}
        </div>
      </div>
    )
  }
}
