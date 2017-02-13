/**
 * Created by tan on 2017/2/11.
 */
//文章详情页
import React from 'react'
import {connect} from 'react-redux'
import RewardTag from '../components/RewardTag'
import Reply from '../components/Reply'
import ReplyList from '../components/ReplyList'
import data from '../data/class.json'
import '../styles/Detail.scss'
class ArticlDetail extends React.Component
{
  render()
  {
    const {index,askuser,lefttime,answercount,money,content,src}=this.props.location.state;//将跳转页的内容带过来
    let article=[];//文章中的回答数据
    //读取具体文章中的数据
    require(`../data/${src}.json`).forEach((item,index)=>{
      article.push(<Reply key={index} name={item.name} work={item.work} listencount={item.listencount} praisecount={item.praisecount} content={item.content} time={item.time} />)
    });

    return (
      <div className="app">
        <div style={{marginBottom:.5+"rem"}}>
          <section className="section">
            <div className="header">
              <div className="info">
                <div className="img-block"><img className="img" src={require('../images/user.png')}/></div>
                <span className="title">{askuser}</span>
              </div>
              <p className="money">赏金￥{money}</p>
            </div>
            <div className="content">{content}</div>
            <div className="reply">
              <span className="btn btn-lg btn-danger">抢答</span>
              <p className="reason">仅特邀优质答主可答</p>
            </div>
            <div className="footer">
              <p>还剩{lefttime}小时</p>
              <div >已有{answercount}人抢答，抢答选中者可获得赏金</div>
            </div>
          </section>
        </div>
        <RewardTag  iconsrc={`${data[index].iconsrc}`} title={data[index].title} content={data[index].content} url={`/rewards/${data[index].url}`} express={data[index].express} classer={data[index].class}/>
          <ReplyList replys={article}/>
      </div>
    )
  }
}
function MapStateToProps(state) {
  return {

  }
}
export default connect(MapStateToProps)(ArticlDetail)
