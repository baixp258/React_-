import React, { Component } from 'react';
import Item from '../Item/index';
import './index.css';

//map遍历必须有返回值
export default class List extends Component {



    render() {
       // debugger
        const {tudos,updateTodu,deleteTodu}=this.props; 
        console.log(tudos)
        
        return (
            <div>
                 <ul className="todo-main">
                    {
                        tudos.map(todu=>{
                            
                            return <Item key={todu.id} {...todu} updateTodu={updateTodu} deleteTodu={deleteTodu}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
