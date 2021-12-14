import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
       const {users,isfirst,isLoading,err} =this.props
        return (
            <div className="row">
               {
                isfirst ? <h2>欢迎使用gitHup查询</h2>: isLoading ? <h2>isLonding数据正在加载</h2>: err ? <h2>err</h2>:
                 users.map((item)=>{
                    return(
                     <div key={item.id} className="card"> 
                            <a rel="noreferrer" href={item.html_url} target="_blank">
                            <img alt="head_photo" src={item.avatar_url} style={{width:'100px'}}/>
                            </a>
                            <p className="card-text">{item.login}</p>
                        </div>
                    )
                   } ) 
            }
             </div>
            )
    }
}
    
