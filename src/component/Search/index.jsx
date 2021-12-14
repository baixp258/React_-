import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Pubsub from 'pubsub-js'

export default class Search extends Component {
    //https://api.github.com/search/users?q=atguigu

 
    search=()=>{
       const {inputData:{value:keyWord}}=this
      // this.props.updateState({isfirst:false,isLoading:true})
       Pubsub.publish('itguigu',{isfirst:false,isLoading:true})
       axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
           response=>{
            console.log('数据接收成功',response.data)
           // this.props.updateState({isLoading:false,users:response.data.items})
            Pubsub.publish('itguigu',{isLoading:false,users:response.data.items})
               console.log('数据接收成功',response.data)
           },
           error=>{
            Pubsub.publish('itguigu',{isLoading:false,err:error.message})
           // this.props.updateState({isLoading:false,err:error.message})
               console.log('接收失败',error)
            }
       )
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                <h3 className="jumbotron-heading">Github 搜索</h3>
                <div>
                    <input ref={c=> this.inputData = c } type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
                </section>
            </div>
        )
    }
}
