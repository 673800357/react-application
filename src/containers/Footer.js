/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
import {Link} from "react-router"

export default class Footer extends React.Component
{
  render()
  {
    return (
      <div className="footer">
        <nav className="mains">
          <Link to="/talkboard" className="fb-item" activeClassName="activer">首页</Link>
          <Link to="/rewardboard" className="fb-item"  activeClassName="activer">快问</Link>
           <Link to="/find" className="fb-item" activeClassName="activer" >找人</Link>
          <Link className="fb-item" to="/me" activeClassName="activer">我的</Link>
        </nav>
      </div>
    )
  }
}
