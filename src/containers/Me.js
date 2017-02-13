/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
import MeDetail from '../components/MeDetail'
import '../styles/Me.scss'
export default  class Me extends React.Component {
    //我的页面
  render()
  {
    return (
      <div className="app">
          <MeDetail/>
        <ul className="ul">
          <li className="li-item"><span className="glyphicon glyphicon-question-sign"/><span> 我问</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
          <li className="li-item"><span className="glyphicon glyphicon-headphones"/><span> 我听</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
          <li className="li-item"><span className="glyphicon glyphicon-sunglasses"/><span> 我收听的人</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
          <li className="li-item"><span className="glyphicon glyphicon-comment"/><span> 我的小讲</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
        </ul>

        <ul className="ul">
          <li className="li-item"><span className="glyphicon glyphicon-phone"/><span > 手机号绑定 </span><span className="pos1"> 18251830695</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
          <li className="li-item"><span className="glyphicon glyphicon-bookmark"/><span> 帮助</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
          <li className="li-item"><span className="glyphicon glyphicon-info-sign"/><span> 关于</span><span className="glyphicon glyphicon-chevron-right pos"/></li>
        </ul>
        <div className="logout"><span>退出登录</span><span className="glyphicon glyphicon-chevron-right pos"/></div>
      </div>
    )
  }
}
