/**
 * Created by tan on 2017/2/7.
 */
import React from 'react';

import DetailHead from '../components/DetailHead';//讨论详细页头部
import QuestionList from '../components/QuestionList';//回答的列表

import '../styles/bootstrap/css/bootstrap.css';
import '../styles/discuss.scss';//讨论详细页的样式

export default class Detail extends React.Component
{

  constructor()
  {
    super()
  }
  render()
  {
    const {title,url,listencount,answercount}=this.props.location.state;//
   let detailData=require(`../data0/${url}.json`);
    return (
      <div className="talkborder app">

        <DetailHead title={title} />
        <div>
        <QuestionList detailData={detailData} listencount={listencount} answercount={answercount} />
        </div>
      </div>

    )
  }

}
