/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
//问题发布页展示
export  default class Publish extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={on:true,count:0};
    this.change=this.change.bind(this);
    this.count=this.count.bind(this)
  }

  change(e)//切换匿名按钮的状态
  {
   e.preventDefault();
   this.setState({on:!this.state.on})
  }
    count()//计算输入框中的字符数
    {
      this.setState({count:this.refs.textarea.value.length})
    }

  render()
  {
    const {placeholder}=this.props;
    let status="switch-area on";
    this.state.on?status="switch-area on":status="switch-area";

    return (
      <div className="reward">
        <form>
          <div className="textarea-wrap">
            <textarea ref="textarea" placeholder={placeholder} onChange={this.count} maxLength="300"/>
            <div>
              <div className="btn-img">
                <span className="glyphicon glyphicon-plus"/>
                添加图片
                <input type="file" name="add" style={{position:"absolute",left:0,width:100+'%',opacity:0}}/>
              </div>
              <span className="counter">
                <i>{this.state.count}</i>
                <span>/150</span>
              </span>
            </div>
          </div>
          <div className="input-wrap" onClick={this.change}>
            <span className={status}><i className="switch-btn"/></span>
            <label className="inline">我要匿名</label>
          </div>
          <div className="btn-wrap">
            <p className="money">￥10</p>
            <button className="button">发布</button>
          </div>
          <div className="rule">
            <a>查看问答细则及责任声明 ></a>
          </div>
        </form>
      </div>
    )
  }
}
