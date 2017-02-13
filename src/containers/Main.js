
import '../styles/App.scss';
import '../styles/bootstrap/css/bootstrap.css';
import '../styles/discuss.scss';//讨论详细页的样式
import React from 'react';
import Talk from '../components/Talk'

import data from "../data0/main.json";//模拟数据


let hot=[];//存放所有热门数据
let main=[];//普通数据
let initial=[];//开始展示的3条

data.forEach((item,index)=>{
  if (item.hot==true)
    hot.push(<Talk key={index} number={index} title={item.title} listencount={item.listencount} url={item.url} hot={true} />)
});
data.forEach((item,index)=>{
  if (item.hot==false)
  main.push(<Talk key={index} title={item.title} listencount={item.listencount} url={item.url} hot={false}/>)
});
initial=hot.splice(0,3);//取前面三条

class AppComponent extends React.Component {
  constructor(props)
  {
    super(props);
    this.showmore=this.showmore.bind(this);
    this.state={
      hide:[],more:"more"
    }
  }
  showmore()
  {

    this.setState({hide:hot,more:"more hide"});
  }
  render() {
    return (
      <div className="talkborder app">
        <ul className="talks">
          {main}
        </ul>
        <div>
          <h2 className="talks-title">热门讨论</h2>
          <ul className="talks">
            {initial}
          </ul>
        </div>
        <div  onClick={this.showmore} className={this.state.more} ref="showmore">查看更多讨论</div>
        <div className="talks mores">{this.state.hide}</div>
      </div>
    );
  }
}
export default AppComponent;
