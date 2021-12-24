import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from './redux/store/store'
//引入react-redux中
import {Provider} from 'react-redux'
/*
ReactDOM.render(
      <App/>
 ,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  ,document.getElementById('root'))




/*
旧版本实现方式
ReactDOM.render(<App/>,document.getElementById('root'))
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})

*/
