/*
引入react-redux容器
*/
//引入connect用于Count容器和redux连接
import {connect} from 'react-redux'
//引入子组建UI组建
import CountUI from '../component/index'
//引入store
import store from '../redux/store/store'
//引入createActions
import {createIncrementAction,decreateIncrementAction,asyncIncrementAction} from '../redux/create_action/action'


//传入返回一个state
function mapStateToProps(state){
    return {count:state}
}

//
function mapDispatchToProps(dispatch){
    return {
        //增加 
        add:number=>{
            console.log('aaa',number)
            dispatch(createIncrementAction(number))
        },
        //异步减少
        jian:(number)=>{
            dispatch(decreateIncrementAction(number))
        },
        //异步增加
        addAsync:(number,time)=>{
            dispatch(asyncIncrementAction(number,time)) 
        }
    }
} 



//暴露容器
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)