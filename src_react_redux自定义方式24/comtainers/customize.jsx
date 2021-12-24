import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {createIncrementAction} from '../redux/create_action/action'
//自定义UI组件
class Total extends Component{


    add=()=>{
        const {value}=this.selectValue
        alert(value)
        this.props.add(value*1)
    }


    render(){
        console.log('泥塑殴斗',this.props)
        const {total} =this.props
        return(
            <div>
                <h2>累计求和:{total}</h2>
                <select ref={c=>this.selectValue=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.add}>增加</button>
            </div>
        )
    }

}
//自定义容器组件并默认暴露 引入插件 react-redux
export default connect(
    //mapStateToProps用于传递状态
    state=>({total:state}),
    //apDispatchToProps用于传递操作状态的方法
    {
        add:createIncrementAction
    }

)(Total)