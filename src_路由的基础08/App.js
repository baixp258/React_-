
import React, { Component } from 'react';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/Home/index'
import About from './component/About/index'

export default class App extends Component {


  

  render() {
    return (
      <div id="root">
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <BrowserRouter>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*
                  <a className="list-group-item" href="./about.html">About</a>
                   <a className="list-group-item active" href="./home.html">Home</a>
                */}
                    <Link className="list-group-item" to='/home'>Home</Link>
                    <Link className="list-group-item" to='/about'>About</Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  
                    <Routes>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      </Routes>
                  
                </div>
              </div>
            </div>
          </div>
         </BrowserRouter>
        </div>
      </div>
    )
  }
}
