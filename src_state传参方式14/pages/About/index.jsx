import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('路由组件',this.props)
    return (
      <div>
         <h3>我是About的内容</h3>
      </div>
    )
  }
}
