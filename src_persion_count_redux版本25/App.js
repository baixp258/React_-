
import React, { Component } from 'react';
import Ccontainer from './comtainers/Count/CountContainer'
import Persion from './comtainers/Persion/persion'

import './App.less';



export default class App extends Component {

  render() {
    return (
      <div>
        {/*
          容器组件
        */}
         <Ccontainer/>
         <hr/>
         <Persion/>
      </div>
    
    )
  }
}
