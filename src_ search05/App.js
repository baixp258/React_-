
import React, { Component } from 'react';
import './App.css';
import List from './component/List'
import Search from './component/Search'

export default class App extends Component {

  state={
    users:[],
    isfirst:true,
    isLoading:false,
    err:""

  }

  updateState=(stateObj)=>{
    this.setState(
      stateObj  
    )
  }

  render() {
    const {users}=this.state
    return (
      <div className="container">
       <Search updateState={this.updateState}/>
       <List {...this.state}/>
    </div>
    )
  }
}
