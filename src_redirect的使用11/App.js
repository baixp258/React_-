
import React, { Component } from 'react';
import {NavLink,BrowserRouter,Route,Routes,Redirect} from 'react-router-dom'
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
                       新版路由不支持<Redirect to="/home"/>，旧版支持，使用时当前面路由都匹配失败时匹配Redirect
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
