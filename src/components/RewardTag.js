/**
 * Created by tan on 2017/2/10.
 */
import React,{PropTypes} from 'react'
import {Link} from 'react-router'

//分类标签展示组件
export default  class RewardTag extends React.Component
{
  render()
  {
    const {iconsrc,title,content,clickask,url,express,classer}=this.props;
    return (
      <li className="tag">
        <Link to={{pathname:url,state:{classer:classer,express:express,title:title,iconsrc:iconsrc}}} >
          {/*改为用redux控制*/}
          <img className="icon" src={require(`../images/${iconsrc}.png`)}/>
          <p className="tag-title">{`${title[0]}，${title[1]}`}</p>
          <p >{content}</p>
        </Link>
        <Link to={{pathname:"/tutor",state:{iconsrc,title,classer}}}>
          <span className="btn-ask">提问</span>
        </Link>
      </li>
    )
  }
}
