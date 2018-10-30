import React, { Component } from 'react'

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import {dashboardMenu, dashboardMenuSelected} from "../actions"

// import animation
import { TweenMax, Back, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

 class SectionDashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            menuSelected : false
        }
    }


    componentWillMount(){
        this.props.dashboardMenu()
    }

    menuItemSelected(id){
        console.log('hello world',id )
        this.props.dashboardMenuSelected(id)
        this.setState({ menuSelected : id })
    }
    menuAnimation(selector){
        var tl = new TimelineMax()
            .to(selector, 0.15, {y : "-30px", ease: Back.easeOut.config(1.7)})
            .to(selector, 0.15, {y : "0px", ease: Back.easeOut.config(1.7)})
        tl.play()
    }

    sectionsRender(){

        const {menuDashboard} = this.props

        
        if(menuDashboard){
            return menuDashboard.map((menuItem) => {
                return (
                    <div key={menuItem.id} className={`${this.state.menuSelected ? "col-12" : "col-4"} p-2 perspective`}>
                        <div 
                            onMouseUp={()=>{
                                this.menuItemSelected(menuItem.id),
                                this.menuAnimation(".dash-requests")
                            }} 
                            className={`dashSection gradient1 p-5 shadow`}
                        >
                            <div className='col-12 z2'>
                                <div className='title2 text-center'>
                                    {menuItem.title}
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            })
        }
    }


    render() {

    return (
        <div className='row'>
            {this.sectionsRender()}
        </div>
    )
    }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({dashboardMenu, dashboardMenuSelected}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        menuDashboard : state.menuDashboard
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SectionDashboard)