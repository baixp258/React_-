import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import List from './components/List/index';


export default class App extends Component {

  state={
    tudos:[
      {id:1,name:'吃饭',done:true},
      {id:2,name:'睡觉',done:true},
      {id:3,name:'打篮球',done:false}
    ]
  }
  //子传值给父，可以通过父定义函数方式传递给子，子返回响应的数据，作为父函数的参数
  addTodu=(newtodu)=>{
    //解构tudos
    const {tudos}=this.state
    //新数组生成，newtodu子返回的新对象,...tudos是元数组
    const newtodus=[newtodu,...tudos]
    //渲染页面
    this.setState({
      tudos:newtodus
    })
  }
  //祖孙传值需要，需要祖-->父-->子
  updateTodu=(id,done)=>{
    const {tudos}=this.state
  const newTudos=tudos.map((tudo)=>{
      if(tudo.id===id){
        //{...tudo,done:done}通过{...tudo}获取到原对象，并改变对象中done的值，值为done
        return {...tudo,done:done}
      }else{
        return {...tudo}
      }
    })
    this.setState({
      tudos:newTudos
    })
  }

  //删除delete列表中tudo
  deleteTodu=(id)=>{
    const {tudos}=this.state
    const newTodus= tudos.filter((todu)=>{
        return  todu.id !==id
    })
    this.setState({
      tudos:newTodus
    })
  }

  //全选
  checkAll=(done)=>{
    const {tudos}=this.state
    const newTodus=tudos.map((tudo)=>{
      return {...tudo,done:done}
    })
    this.setState({
      tudos:newTodus
    })
  }
  // 清楚已选中列表
  clearCheck=()=>{
    const {tudos}=this.state
   const  newTodus=  tudos.filter((tudo)=>{
        return !tudo.done
    })
    this.setState({
      tudos:newTodus
    })
  }
  
  render() {
    const {tudos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
            <Header addTodu={this.addTodu}/>
            <List tudos={tudos} updateTodu={this.updateTodu} deleteTodu={this.deleteTodu}/>
            <Footer tudos={this.state.tudos} checkAll={this.checkAll} clearCheck={this.clearCheck}/>
        </div>
      </div>
    )
  }
}
