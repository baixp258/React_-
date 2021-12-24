/*
创建action 是函数形式，需要接受一个data参数，返回一个对象，返回对象为同步执行，返回函数是异步执行
*/
import {INCREMENT,DEINCREMENT} from '../../constant/constant'
import store from '../store/store'
//生成增长action 表示默认返回 ({{type:INCREMENT,data}})  ==》return {{type:INCREMENT,data}}
export const createIncrementAction = (data) =>({type:INCREMENT,data})
//减少action
export const decreateIncrementAction =(data) =>({type:DEINCREMENT,data})

export const asyncIncrementAction=(data,time)=>{

    return (dispatch)=>{
		setTimeout(()=>{
			store.dispatch(createIncrementAction(data))
		},time)
	}
    
}

