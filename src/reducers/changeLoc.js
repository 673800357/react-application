/**
 * Created by tan on 2017/2/11.
 */
import {Change_Loc} from '../actions/action';
import Reward from '../components/Reward'
import rewarddata from '../data/question.json' //读取问题的数据
import React from 'react'
//处理跳转时的action

let rewards=[],//首页显示的问题
  health=[], love=[],law=[],baby=[],science=[],other=[];//问题分类
rewarddata.forEach((item,index)=>{


  switch (item.class)
  {
    case "health": health.push(<Reward   key={index} src={item.url} inde={0} classer={item.class} answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      rewards.push(<Reward  key={index} src={item.url}  inde={0} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      break;
    case "love": love.push(<Reward  key={index} src={item.url}  inde={1} classer={item.class} answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      rewards.push(<Reward  key={index} src={item.url}  inde={1} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      break;
    case "law": law.push(<Reward  key={index} src={item.url}  inde={2}  classer={item.class} answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      rewards.push(<Reward  key={index} src={item.url}  inde={2} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      break;
    case "baby": baby.push(<Reward  key={index} src={item.url}  inde={3} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      rewards.push(<Reward  key={index} src={item.url}  inde={3} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      break;
    case "science": science.push(<Reward key={index} src={item.url}  inde={4}  classer={item.class} answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      rewards.push(<Reward  key={index} src={item.url}   inde={4} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);

      break;
    case "other": other.push(<Reward   key={index} src={item.url}  inde={5} classer={item.class} answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      rewards.push(<Reward  key={index} src={item.url}  inde={5} classer={item.class}  answercount={require(`../data/${item.url}.json`).length} askuser={item.askuser} money={item.money}  content={item.content} first={item.first} lefttime={item.lefttime} answertime={item.answertime} url={`/reward/${item.url}`}/>);
      break;
  }//存到store中去
});
//问题的分类在store中管理，loc表示当前所在的分类位置
let initialState={
  rewards:{health,love,law,baby,science,other,rewards},
  sort:["health","love","law","baby","science","other"],
  loc:"rewards"
};
 function changeLoc(state=initialState,action) {
  switch (action.type)
  {
    case Change_Loc:

      return Object.assign({},state,{loc:action.loc});
    default: return state
  }
}
export default changeLoc;
