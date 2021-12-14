import React, { Component } from 'react';
import './index.css';


export default class Item extends Component {

    state={
        mouse:false
    }
    //鼠标的移入移除高亮显示
    handleMouse=(flag)=>{
        //用高阶函数返回
        return ()=>{
          //  console.log(flag)
            this.setState({
                mouse:flag
            })
        }
    }
    //复选框勾选
    handleCheck=(id)=>{
        //传参数用高阶函数返回
        return (event)=>{
            const {target} =event
            this.props.updateTodu(id,target.checked)
        }
    }

    //
    deleteItem=(id)=>{
       // debugger
        if(window.confirm('确定删除吗')){
            this.props.deleteTodu(id);
        }
       
        
        
    }


    render() {
        const {id,name,done} =this.props;
        const {mouse} =this.state
        
        return (
            <div>
                 <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>this.deleteItem(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
                </li>
            </div>
        )
    }   
}
