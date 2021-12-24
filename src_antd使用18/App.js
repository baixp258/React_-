
import React, { Component } from 'react';
import { Button  } from 'antd';
import { HomeOutlined,SmileOutlined,SyncOutlined,} from '@ant-design/icons';
import './App.less';


export default class App extends Component {


  

  render() {
    
    return (
      <div>
        <h1>antd的使用</h1>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <HomeOutlined/>
        <SmileOutlined/>
        <SyncOutlined/>

      </div>
    
    )
  }
}
