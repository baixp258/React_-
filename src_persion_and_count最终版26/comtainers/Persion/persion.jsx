import React,{Component} from 'react'
//引入容器组件
import {connect} from 'react-redux'
//引入action
import {createIncrePersion} from '../../redux/create_action/action'
//引入随机数nanoid
import {nanoid} from 'nanoid'

//UI组件
class Persion extends Component{

    //添加人员
    addPersion=()=>{
        const inputname=this.nameValue.value
        const inputage=this.ageValue.value
        //组装成一个对象返回
        const persion={id:nanoid(),name:inputname,age:inputage*1}
        this.props.addPers(persion)
        //将input框值重置为null
        this.nameValue.vlaue=''
        this.ageValue.valalue=''

    }

    render(){
        console.log('数据',this.props.persions)
        const {persions,count}=this.props
        return(
            <div>
                <h2>人员列表</h2>&nbsp;&nbsp;&nbsp;<h2>total统计:{count}</h2>
                <input ref={c=>this.nameValue=c} type="text" placeholder="输入名字"/>&nbsp;&nbsp;
                <input ref={c=>this.ageValue=c}type="text" placeholder="输入年龄"/ >
                <button onClick={this.addPersion}>添加Persion</button>
                <ul>
                   {
                        this.props.persions.map((persion)=>{
                            return(
                             <li key={persion.id}>姓名:{persion.name}----年龄:{persion.age}</li>
                            ) 
                         })
                   }
                </ul>
            </div>
        )
    }
}

//暴露组件
export default connect(
    //返回一个对象，获取redux中persion数据和count数据
    state =>({persions:state.addrens,count:state.addcount}),
    //返回一个执行对象
    {
        addPers:createIncrePersion
    }
)(Persion)