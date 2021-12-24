
import React, { Component } from 'react';
import { Button  } from 'antd';
import { HomeOutlined,SmileOutlined,SyncOutlined,} from '@ant-design/icons';
import './App.less';




export default class App extends Component {

  state={
    count:0
  }
  //增加
  addNum=()=>{

     const {value}=this.selectvlaue;
     console.log(value)
     const {count}=this.state
     this.setState({
       count:count+value*1
     })

  }
  //减少
  onLess=()=>{
    const {value}=this.selectvlaue;
    const {count}=this.state
    this.setState({
      count:count-value*1
    })
  }
  //奇数增加
  jsAdd=()=>{
   
    const {value}=this.selectvlaue;
    const {count}=this.state
    if(count%2 !==0){
      this.setState({
        count:count+value*1
      })
    }
   
    
  }
  //异步执行
  async=()=>{
    const {count}=this.state
    const {value}=this.selectvlaue;
    setTimeout(()=>{
      this.setState({
        count:count+value*1
      })
    },1000)

  }
  render() {
    const {count} =this.state
    return (
      <div>
        <h1>运算结果为:{count}</h1>
          <select ref={c =>this.selectvlaue=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;
        <button onClick={this.addNum}>+</button>&nbsp;&nbsp;
        <button onClick={this.onLess}>-</button>&nbsp;&nbsp;
        <button onClick={this.jsAdd}>奇数增加</button>&nbsp;&nbsp;
        <button onClick={this.async} >异步执行</button>
      </div>
    
    )
  }
}
