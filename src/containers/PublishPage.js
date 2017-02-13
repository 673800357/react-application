/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
import Publish from '../components/Publish'
import '../styles/bootstrap/css/bootstrap.css'
import '../styles/Publish.scss'

export default class PublishPage extends React.Component
{
  render()
  {
    const {iconsrc,title,classer}=this.props.location.state;
    const holder={health:"请告知性别、年龄、症状、出现时间、曾用药等信息，可附带检查报告及症状示意图，以增加回复准确性。单次提问咨询单个问题，以保证医生更全面的建议。48小时内无人抢答，将按支付路径全额退款。",
    love:"请详细描述您的情感状态、背景信息以及具体问题。匿名提问后如需要进一步咨询，请告知前次咨询内容以便对应。48小时内无人抢答，将按支付路径全额退款。",
     law:"详细描述事件起因经过、进行状态以及具体问题。匿名提问后如需要进一步咨询，请告知前次咨询内容以便对应，可附带图片补充完善信息。详细介绍背景信息将有利于获得全面有效的解答。48小时内无人抢答，将按支付路径全额退款。",
      baby:"“育儿快问”仅回答宝宝成长养育类问题，宝宝身体不适或生病等问题请前往“健康快问”。详细描述背景及问题将有利于获得更有参考价值的答案，可附照片。48小时内无人抢答，将按支付路径全额退款。",
      other:"描述具体并补充背景信息，精选优质答主帮你解答。48小时内无人抢答，将按支付路径全额退款。",
      science:"请问你的科学问题。。。。。。"
    };//提问页的palceholder
    return (
      <div className="app">
        <div className="banner">{title[0]}<img className="img" src={require(`../images/${iconsrc}.png`)}/>{title[1]}</div>
        <Publish placeholder={holder[classer]}/>
      </div>
    )
  }
}
