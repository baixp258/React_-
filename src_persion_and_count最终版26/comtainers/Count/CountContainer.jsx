/*
引入react-redux容器
*/
//引入connect用于Count容器和redux连接
import {connect} from 'react-redux'
import React, { Component } from 'react';
//引入store
import store from '../../redux/store/store'
//引入createActions
import {createIncrementAction,decreateIncrementAction,asyncIncrementAction} from '../../redux/create_action/action'



//redux的UI组建
class Count extends Component {

 
  //增加
  addNum=()=>{
     const {value}=this.selectvlaue;
     const {add} =this.props
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
      console.log('count组建',this.props)
      const {count,persions}=this.props
    return (
      <div>
        <h1>运算结果为:{count}</h1>&nbsp;&nbsp;<h1>总人数为:{Object.keys(persions).length}</h1>
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


export default connect(
    //函数对象优化，直接用connect包裹 state接收App.jsx传入的store,容器组件可以获取到state值，封装对象{count:state}
    state=>({count:state.addcount,persions:state.addrens}),
    
    
    //函数方法的操作,直接传入add,jian这样的方法,直接调用create_action中方法，这样返回对象，接收APP父组件传入的store中dispatch方法，更新值
    {
            //增加 
            add:createIncrementAction,
            //异步减少       
            jian: decreateIncrementAction,
            //异步增加
            addAsync:asyncIncrementAction 
    }

)(Count)

