/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
import allReducer from '../../constant/combinreduces'


import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
/*
//引入为Count组件服务的reducer
import CountRedux from '../count_reduce/countredux'
import PersionRedux from '../persion_reduce/persionreduce'
//添加多个reduce到redux中
//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	addcount:CountRedux,
	addrens:PersionRedux
})
*/
//暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))