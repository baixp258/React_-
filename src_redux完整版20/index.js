import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from './store/store'
/*
ReactDOM.render(
      <App/>
 ,
  document.getElementById('root')
);
*/



ReactDOM.render(<App/>,document.getElementById('root'))

store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})
