import React, { Component } from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import Detail from './Detail'

const messagearr=[
  {id:'1',title:'标题1'},
  {id:'2',title:'标题2'},
  {id:'3',title:'标题3'}]

export default class Message extends Component {

    //push方式查看
    showPush=(id,title)=>{
        //编程式路由导航
         this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
    //replace方式查看  不保留浏览器痕迹
    showReplace=(id,title)=>{
         this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }

    //回退
    backShow=()=>{
        this.props.history.goBack();
    }

    //前进
    forWardShow=()=>{
        this.props.history.goForward();
    }


    render() {
        return (
            <div>
                   <ul>
                    
                    {
                      messagearr.map((message)=>{
                          return(
                            <li key={message.id}>
                             {/*params接收参数*/}
                             <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                             <button onClick={()=>this.showPush(message.id,message.title)}>push查看</button>&nbsp;&nbsp;
                             <button onClick={()=>this.showReplace(message.id,message.title)}>replace查看</button>
                            
                            {/*seach接收参数
                             <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                            */}
                            
                              {/*state接收参数
                                <Link to={{pathname:'/home/message/detail',state:{id:message.id,title:message.title}}}>{message.title}</Link>&nbsp;&nbsp;
                            */}
                             
                            </li>
                            
                          )})

                    }
                  </ul>
                  <hr/>
                  <button onClick={this.backShow}>回退</button>&nbsp;&nbsp;
                  <button onClick={this.forWardShow}>前进</button>
                  {/*params接收参数   */}
                         <Switch>
                     <Route path='/home/message/detail/:id/:title' component={Detail}/>
                  </Switch>
                
               
                {/*
                    seach接收参数
                
                  <Switch>
                     <Route path="/home/message/detail" component={Detail}/>
                  </Switch>
                  */}
            </div>

        )
    }
}

