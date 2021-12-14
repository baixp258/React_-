import React, { Component } from 'react';
import  './index.css';

export default class Footer extends Component {

    //全选
    checkItemAll=(event)=>{
        //alert('123')
        this.props.checkAll(event.target.checked)
    }
    //清楚已选中的数据
    clearCheckItem=()=>{
        alert('123')
        this.props.clearCheck()
    }

    render() {
       // debugger
        const {tudos}=this.props; 
        console.log(tudos)
        const donetotal=tudos.reduce((pre,tudo)=>{
            return pre +(tudo.done ? 1 :0)
        },0)
        console.log(donetotal)
        const total=tudos.length
        return (
            <div>
                <label>
                    <input type="checkbox" onChange={this.checkItemAll} checked={donetotal===total && total!==0? true : false}/>
                </label>
                <span>
                    <span>已完成{donetotal}/全部{total}</span> 
                </span>
                <button onClick={this.clearCheckItem} className="todo-footer">清除已完成任务</button>
            </div>
        )
    }
}
