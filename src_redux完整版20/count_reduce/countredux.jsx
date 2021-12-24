/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {INCREMENT,DEINCREMENT} from '../constant/constant'
//初始化状态0
const initstate=0
export default function countReducer(prestate=initstate,action){

     console.log(prestate,action);
	//从action对象中获取：type、data
    const {type,data}=action
   
    switch(type){
        case INCREMENT:  //增加操作
         return prestate+data
        case DEINCREMENT: //减少操作
         return prestate-data
        default:
            return prestate
    }
        

}