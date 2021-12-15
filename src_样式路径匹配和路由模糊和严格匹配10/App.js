
import React, { Component } from 'react';
import {NavLink,BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/index'
import About from './pages/About/index'
import Header from './component/Header'
import MyNavLink from './component/Common'


export default class App extends Component {


  

  render() {
    
    return (
      <div id="root">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header/>
            </div>
          </div>
       
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*
                  <a className="list-group-item" href="./about.html">About</a>
                   <a className="list-group-item active" href="./home.html">Home</a>
                */}
                    <MyNavLink  to='/home'>Home</MyNavLink>
                    <MyNavLink  to='/about'>About</MyNavLink>   
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  
                    <Routes>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                    </Routes>
                  {/*
                      1.路由默认是开启模糊匹配，匹配顺序根据Router标签中path路径跟Link标签中的to进行匹配，第一个匹配到返回。
                      2.如果在Router中执行严格匹配，添加exact={true} 即可  <Route exact={true} path="/about" element={<About/>}/>
                      3.引入的样式在public目录下index.html中不做用<link rel="stylesheet" href="./css/bootstrap.css"> 改成<link rel="stylesheet" href="/css/bootstrap.css">
                        或者是<link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">或者用hashRoute
                  */}
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    )
  }
}
