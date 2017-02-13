/**
 * Created by tan on 2017/2/10.
 */
import React,{PropTypes} from 'react'
import {connect} from 'react-redux'
import '../styles/Main.scss'
import RewardTagList from '../components/RewardTagList'
import RewardTag from '../components/RewardTag'
import RewardList from '../components/RewardList'
import {changeLoc} from '../actions/action'

//快问主页

import classdata from '../data/class.json'//读取主页的标签分类数据
import $ from 'jquery'
 class AskMain extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=({rewards:this.props.rewards.slice(3),show:this.props.rewards.slice(0,3)});
    //rewards是所有文章，show是显示出来的文章
    //其它分类的文章数据过少没有加下拉加载，只有主页加了
  }


    componentWillMount()
    {
      //浏览器倒退回
      const {dispatch}=this.props;
      dispatch(changeLoc("rewards"));//
    }

    componentDidMount()//添加滚动到底
    {
      let rewards=this.state.rewards,show=this.state.show;

      $(window).scroll(()=>{
        //每次下拉到底显示多2条
        let dis=$(document).height()-$(window).scrollTop()-$(window).height();
        /*console.log(dis);*/
       if (dis<30)
        {
        show.push(...rewards.splice(0,2));
        this.setState({rewards:rewards,show:show});
        }
      })

    }

    render()
    {
   let rewardtags=[];//分类标签数组
      classdata.forEach((item,index)=>{
        rewardtags.push(<RewardTag key={index}  iconsrc={`${item.iconsrc}`} title={item.title} content={item.content} url={`/rewards/${item.url}`} express={item.express} classer={item.class}/>)
      });//点击没加
/*      let rewards=this.state.rewards,show=this.state.show;
      show=rewards.splice(0,3);//初始显示3条
      this.setState({rewards:rewards,show:show});*/


      return (
        <div className="app">
          <RewardTagList  rewardtags={rewardtags}/>
          <RewardList rewards={this.state.show}/>
        </div>
      )
    }
}
function MapStateToProps(state) {
  return {
    rewards:state.changeLoc.rewards[state.changeLoc.loc],
    loc:state.changeLoc.loc
  }
}
export default connect(MapStateToProps)(AskMain)
