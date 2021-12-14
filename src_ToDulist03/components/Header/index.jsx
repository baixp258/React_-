import React, { Component } from 'react';
import  './index.css';
import {nanoid} from 'nanoid';

export default class Header extends Component {

    //定义键盘弹起事件
    getKeyUpValue=(event)=>{
        //解构event，获取键盘keyCode编码和target
        const {target,keyCode}=event
        //校验输入空值
        if(target.value===''){
            alert('输入值为空')
            return
        }

        //封装获取数据将返回给父函数
        if(keyCode===13){
           alert(target.value)
            const newtodu= {id:nanoid(),name:target.value,done:false}
            return this.props.addTodu(newtodu)
        }
       
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.getKeyUpValue} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
