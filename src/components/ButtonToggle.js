import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class ButtonToggle extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeBtn : []
        }
    }



    handleClick = (e,i) => {
        const {activeBtn} = this.state
        const {classNameGroup, oneSelect} = this.props

        var container = document.querySelector(`.${classNameGroup}`)

        // Ciblage
        var btn = document.querySelector(`.${classNameGroup} .btn`+i)
        var allBtn = document.querySelectorAll(`.${classNameGroup} .btn`)
        


        if(e.target.classList.contains('active')){
            btn.classList.remove('active')
        }else{
            if(oneSelect){
                allBtn.forEach((btnA)=>{ btnA.classList.remove('active')})
                btn.classList.add('active')

            }else{
                btn.classList.add('active')
            }
        }
        if(activeBtn === false){
            this.setState({ active: true })
        }

        var arrayAssociation = []
        var activedBtn = document.querySelectorAll('.btn.active').forEach((btnactive)=>{

            arrayAssociation.push(btnactive.textContent)
        })

        this.setState({activeBtn: arrayAssociation })
    }


    render() {
        const {options, classNameBtn, classNameGroup} = this.props
        const { active } = this.state

        
        return (
            <div className={`btn-group btn-block btn-group-lg mb-3 radius shadow ${classNameGroup}`}>
                {options && options.map((option,i)=>{
            return (
                <button key={i}
                        className={`${this.props.classNameBtn} btn${i} btn gradient2-action py-3 col`}
                        onClick={(e)=>{this.handleClick(e,i) }}> 
                    {option}
                </button>
                )
            })}
            </div>
        )
    }
}
