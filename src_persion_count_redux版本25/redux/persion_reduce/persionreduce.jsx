//引入常量类
import {INCRPERSION} from '../../constant/constant'


//初始化对象
const initPersion=[{name:'tom',age:'18'}]
export default function PersionReduce(perState=initPersion,action){
    //解构action
    const {type,data} =action

    switch(type){
        case INCRPERSION:  //添加人数  新增人数添加到数组之前
         return [data,...perState]
        default:
            return perState
    }
        


}