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


//mapStateToProps优化
function mapStateToProps(state){
    return {count:state}
}

//mapDispatchToProps优化
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



//暴露容器 1、方式1优化，直接将外部函数，定义到函数connect函数内部

/*
export default connect(
    //函数对象优化，直接用connect包裹
    mapStateToProps=(state)=>({count:state}),
    
    
    //函数方法的操作
    mapDispatchToProps=(dispatch)=>{
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

)(CountUI)

*/
export default connect(
    //函数对象优化，直接用connect包裹 state接收App.jsx传入的store,容器组件可以获取到state值，封装对象{count:state}
    state=>({count:state}),
    
    
    //函数方法的操作,直接传入add,jian这样的方法,直接调用create_action中方法，这样返回对象，接收APP父组件传入的store中dispatch方法，更新值
    {
            //增加 
            add:createIncrementAction,
            //异步减少       
            jian: decreateIncrementAction,
            //异步增加
            addAsync:asyncIncrementAction 
    }

)(CountUI)
