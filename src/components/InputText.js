import React, { Component } from 'react'
import {labelAnimateIn, labelAnimateOut} from '../animation/animationGen' 

export default class InputText extends Component {



    render() {
        const {
            index, 
            label, 
            classNameGroup,
            dataBack,
            type
        } = this.props

        const inputByType = () => {
            if(type === "text"){
                return(
                    <div className={`input${index} searchTextInput form-group ${classNameGroup} form-group-animate`}>
                        <label className='label label-animate-on-select' >{label}</label>
                        <input 
                            onFocus={()=>{labelAnimateIn(index)}} 
                            onBlur={(e)=>{labelAnimateOut(index); this.dataFeedBack(e)}} 
                            onKeyDown={(e)=>{e.key === "Enter" ? this.dataFeedBack(e) : false}}
                            type="text" 
                            name={label} 
                            className="textInput shadow radius form-control form-control-lg" 
                        />
                    </div>
                )
            }else if(type === "number"){
                return(
                    <div className={`input${index} form-group ${classNameGroup} form-group-animate`}>
                        <label className='label label-animate-on-select' >{label}</label>
                        <input 
                            onFocus={()=>{labelAnimateIn(index)}} 
                            onBlur={(e)=>{labelAnimateOut(index); this.dataFeedBack(e)}}
                            onKeyDown={(e)=>{e.key === "Enter" ? this.dataFeedBack(e) : false}} 
                            type="number" 
                            step="0.1"
                            min="0"
                            max="99"
                            name={label} 
                            className="textInput form-control form-control-lg" 
                        />
                    </div>
                )
            }
        }

        return (
            <div>
                {inputByType()}
            </div>
        )
    }

    dataFeedBack(event){
        var valueInput = event.target.value
        this.props.dataBack(valueInput)
        console.log('=========VALUE INSIDE===========')
        console.log(event.target.blur())
    }
}



