
import React, { Component } from 'react';
//import Ccontainer from './comtainers/CountContainer'
//引入自定义组件
import TotalComtainers from './comtainers/customize'
import './App.less';
import store from './redux/store/store'



export default class App extends Component {

  render() {
    return (
      <div>
        {/* 给容器组件传递store 
           <Ccontainer store={store}/>
        */}
         <TotalComtainers/>
      </div>
    
    )
  }
}
