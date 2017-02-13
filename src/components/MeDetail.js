/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
export default  class Me extends React.Component {

  //我的页面详细
  render()
  {
    return (
      <div className="detail-tutor">
        <div className="detail-header">
        <div className="btn-open" >开通分答</div>
        <div className="info"><img style={{position:"relative",width:2.65+"rem",height:2.65+"rem",borderRadius:50+"%",display:"inline-block"}} src={require('../images/user.png')}/><span className="name">马化腾</span></div>
        </div>
        <div className="desc">
          <p>开通分答主页，邀请好友向你提问，</p>
          <p>回答后被他人旁听，可持续获得收入</p>
          <p>收入90%归你，每夜自动领取，入库微信钱包</p>
        </div>
      </div>
    )
  }
}
