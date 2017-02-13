import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
import {Router, Route, Link ,browserHistory,IndexRedirect,hashHistory} from 'react-router';

import  './styles/bootstrap/css/bootstrap.css'
import 'jquery'
import reducer from './reducers/reducer'


import AskMain from './containers/AskMain';//快问主页
import ClassQuestion from './containers/ClassQuestion'//问题分类页
import ArticlDetail from './containers/ArticlDetail'  //问题详细页
import PublishPage from './containers/PublishPage' //问题发布页
import Main from './containers/Main';//快问讨论主页
import Detail from './containers/Detail'//讨论详细页
import Footer from './containers/Footer'//footer
import Me from './containers/Me' //我的页面
import FindMain from './containers/FindMain'//找人
// Render the main component into the dom
class App extends React.Component
{
  render()
  {
    return (
      <div>
        {this.props.children}
       <Footer/>
      </div>
    )
  }
}
let store=createStore(reducer);
const route=(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRedirect to="/talkboard" />
      <Route path="/rewardboard" component={AskMain}  />
      <Route  path="/rewards/:id" component={ClassQuestion}/>
      <Route path="/reward/:id" component={ArticlDetail}/>
   <Route path="/tutor" component={PublishPage}/>
      <Route path="/talkboard" component={Main}/>
      <Route path="/talk/:id" component={Detail}/>
      <Route path="/me" component={Me}/>
      <Route  path="/find" component={FindMain}/>
    </Route>
  </Router>
</Provider>
);
ReactDOM.render(route, document.getElementById('app'));
