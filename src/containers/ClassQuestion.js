/**
 * Created by tan on 2017/2/10.
 */
import React,{PropTypes} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {changeLoc} from '../actions/action'
import '../styles/Class.scss'
//分类问题详细页容器组件

class ClassQuestion extends React.Component
{
  componentWillMount()
  {
    const {dispatch,params,sort}=this.props;
   dispatch(changeLoc(sort[params.id]));
  }
  render()
  {
    const {express,title,iconsrc,classer}=this.props.location.state;
     const {rewards}=this.props;
    return (
      <div className="app">
        <div className="rewards-header">
          <div className="banner">{title[0]}<img className="img" src={require(`../images/${iconsrc}.png`)}/>{title[1]}</div>
          <Link className="ask" to={{pathname:"/tutor",state:{iconsrc,title,classer}}}>
            <span className="glyphicon glyphicon-pencil"></span>我也来问
          </Link>
          <ul className="tips">
            <span className="tip"><span className="glyphicon glyphicon-ok circle"></span>{express[0]} </span>
            <span className="tip"><span className="glyphicon glyphicon-ok circle"></span>{express[1]} </span>
            <span className="tip"><span className="glyphicon glyphicon-ok circle"></span>{express[2]} </span>
          </ul>
        </div>
        <div className="reward">
        {rewards}
        </div>

      </div>
    )
  }
}
function MapStateToProps(state) {

  return {
    sort:state.changeLoc.sort,
    rewards:state.changeLoc.rewards[state.changeLoc.loc],
    loc:state.changeLoc.loc
  }
}
export default connect(MapStateToProps)(ClassQuestion)
