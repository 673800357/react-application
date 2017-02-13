/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
import data from '../data1/people.json'
import FindList from '../components/FindList'
import '../styles/People.scss'
//找人页
export default  class FindMain extends React.Component {

  render()
  {
        let listArr=[];
    data.forEach((item,index)=>{
        listArr.push(<FindList key={index} title={item.title} more={item.more} people={item.people}/>)
    });

    return (
      <div className="main app">
        <div className="search"><div className="box"><span className="glyphicon glyphicon-search"></span>搜索感兴趣的人和问题</div></div>
        <div>
          <ul className="item-nav">
            <li   style={{backgroundImage:`url(${require('../images/bg1.png')})`,marginLeft:0,cursor:"pointer"}}><span style={{display:"block",paddingTop:"3.15rem"}}>健康</span></li>
            <li  style={{backgroundImage:`url(${require('../images/bg2.png')})`,cursor:"pointer"}}><span style={{display:"block",paddingTop:"3.15rem"}}>职场</span></li>
            <li  style={{backgroundImage:`url(${require('../images/bg3.png')})`,marginRight:0,cursor:"pointer"}}><span style={{display:"block",paddingTop:"3.15rem"}}>科普</span></li>
          </ul>
        </div>
        <div>
          <ul className="sub-nav">
            <li>情感</li>
            <li>法律</li>
            <li>理财</li>
            <li>房产</li>
            <li>心理</li>
            <li>育儿</li>
            <li>学术</li>
            <li>全部</li>
          </ul>
        </div>

        {listArr}

      </div>
    )
  }
}


