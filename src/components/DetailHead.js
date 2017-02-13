import React from 'react'
import {Link} from 'react-router'
export default class DeatilHeacd extends React.Component
{
  render()
  {
    const {title}=this.props;
    return (
      <div className="detail" >
        <div className="link"> <Link>全部讨论 ></Link></div>
        <div >
          <a className="asker" href="">分答时刻 | 说出你的故事</a>
          <p className="question">{title}</p>
        </div>
        <div className="woyelaida"><a className="btn">我也来答</a></div>
      </div>
    )
  }
}
