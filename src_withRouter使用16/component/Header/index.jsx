import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {



  //回退
     backShow=()=>{
         this.props.history.goBack();
    }

    //前进
    forWardShow=()=>{
        this.props.history.goForward();
    }

    //Go
    showGo=()=>{
        this.props.history.go(-2);
    }

    render() {
        console.log('普通组件',this.props)
        return (
             <div className="page-header">
             
                  <button onClick={this.backShow}>回退</button>&nbsp;&nbsp;
                  <button onClick={this.forWardShow}>前进</button>
                  <button onClick={this.showGo}>GO</button>
             </div>
        )
    }
}
//withRouter可以加工一般组建，让一般组建具备路由所特有的API
//withRouter的返回值是一个新组建
export default withRouter(Header)