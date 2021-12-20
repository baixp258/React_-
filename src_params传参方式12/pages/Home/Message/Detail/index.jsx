import React, { Component } from 'react'
import {useParams,useSearchParams} from 'react-router-dom'
import qs from 'querystring'
const detailarr=[

    {id:"1",text:'我爱你中国'},
    {id:"2",text:'我爱上海'},
    {id:"3",text:'我爱广州'}
]

export default class Detail extends Component {
    render() {
      {/*
        params方式传参
           console.log(this.props.match.params)
           const {id,title} =this.props.match.params
             const  result= detailarr.find((detail)=>{
            return detail.id===id
        })
          
              
        })
    */}
       {/*
        search方式传参
         
         console.log(this.props.location)
        const {search} =this.props.location
        //search.slice截取字符串
        console.log(qs.parse(search.slice(1)))
        const {id,title}=qs.parse(search.slice(1))
        const  result= detailarr.find((detail)=>{
            return detail.id===id
        })
          
              
        })
    */}

      {/*
        state方式传参
    */}
        console.log(this.props.location.state)
        const {id,title} =this.props.location.state
       
        const  result= detailarr.find((detail)=>{
            return detail.id===id
        })
        
        return (
            <div>
                <ul>
                    <li>用户ID:{id}</li>
                    <li>用户标题:{title}</li>    
                   <li>用户ID:{result.text}</li>  
                </ul>
            </div>
        )
    }
}
