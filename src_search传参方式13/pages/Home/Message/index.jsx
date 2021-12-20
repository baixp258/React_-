import React, { Component } from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import Detail from './Detail'

const messagearr=[
  {id:'1',title:'标题1'},
  {id:'2',title:'标题2'},
  {id:'3',title:'标题3'}]

export default class Message extends Component {
    render() {
        return (
            <div>
                   <ul>
                    
                    {
                      messagearr.map((message)=>{
                          debugger
                          return(
                            <li key={message.id}>
                             {/*params接收参数 */}
                             <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                             &nbsp; <h3>sdsdsdsdd</h3>
                            &nbsp;<button>pull查看</button>
                            &nbsp; <button>push查看</button>
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
                  {/*params接收参数
                         <Switch>
                     <Route path='/home/message/detail/:id/:title' component={Detail}/>
                  </Switch>
                
                  */}
                {/*
                    seach接收参数
                */}
                  <Switch>
                     <Route path="/home/message/detail" component={Detail}/>
                  </Switch>
            </div>

        )
    }
}

