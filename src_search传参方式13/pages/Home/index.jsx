
import React, { Component } from 'react'
import {Route,Switch,BrowserRouter,Outlet} from 'react-router-dom'
import MyNavLink from '../../component/Common'
import Message from './Message/index'
import News from './News/index'

export default class Home extends Component {
    render() {
        return (
            <div>
					<h3>我是Home的内容</h3>
                 
					<div>
						<ul className="nav nav-tabs">
							<li>
								<MyNavLink to="/home/news">News</MyNavLink>
							</li>
							<li>
								<MyNavLink to="/home/message">Message</MyNavLink>
							</li>
						</ul>
                        {/* 注册路由 
                                 新版路由规则 一级路由 <Route  path="/home/*" element={<Home/>}/>
                                             二级路由  <Route path="/news" element={<News/>}/>
                        */}
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                           
                      </Switch>
					</div>
                   
				</div>
        )
    }
}
