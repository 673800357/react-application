/**
 * Created by tan on 2017/2/12.
 */
import React from 'react'
import  People from '../components/People'

//找人列表
export default  class FindList extends React.Component {

  render()
  {
    const {title,more,people}=this.props;
      let peopleArr=[];
      people.forEach((item,index)=>{
        peopleArr.push(<People key={index} title={item.title} nickname={item.nickname} src={item.src}/>);
      });
      let morer="morer hide";
      more?morer="morer":morer="hide"
    return (
      <div>

          <ul className="album">
            <li className="title">{title}</li>
            {peopleArr}
            <li className={morer}>{more}</li>

          </ul>

      </div>
    )
  }
}


