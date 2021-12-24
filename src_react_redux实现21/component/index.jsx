import React, { Component } from 'react';

//redux的UI组建
export default class Count extends Component {

 
  //增加
  addNum=()=>{
     const {value}=this.selectvlaue;
     const {add} =this.props
     console.log('ddddddd',add)
     add(value*1)
  }
  //减少
  onLess=()=>{
    const {value}=this.selectvlaue;
    this.props.jian(value*1)
  }
  //奇数增加
  jsAdd=()=>{
    const {value}=this.selectvlaue;
    if(this.props.count%2 !==0){
      this.props.add(value*1)
    }
  }
  //异步执行
  async=()=>{
    const {value}=this.selectvlaue;
    this.props.addAsync(value*1,500)
  }
  render() {
      console.log(this.props)
      const {count}=this.props
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
