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
            menuSelected : false,
            backAppear : false,
        }
    }


    componentWillMount(){
        this.props.dashboardMenu()
    }

    menuItemSelected(id, category){
        this.props.dashboardMenuSelected(id)
        this.setState({ backAppear: true })
        this.setState({ menuSelected : id })
        this.props.menuSelectedDataBack(category)
    }
    menuAnimation(selector){
        var tl = new TimelineMax()
            .to(selector, 0.15, {y : "-30px", ease: Back.easeOut.config(1.7)})
            .to(selector, 0.15, {y : "0px", ease: Back.easeOut.config(1.7)})
        
        if(this.state.menuSelected === false){
            tl.play()
        }else{
        }
    }

    onClickButtonBack(){
        this.setState({ menuSelected: false })
        this.setState({ backAppear: false })
        this.props.menuSelectedDataBack(false)
        this.props.dashboardMenuSelected(false)
        this.props.dashboardMenu()
    }

    sectionsRender(){

        const {menuDashboard} = this.props

        
        if(menuDashboard){
            return menuDashboard.map((menuItem) => {
                return (
                    <div key={menuItem.id} className={`${this.state.menuSelected ? "col-9 col-sm-9" : " col-6 col-sm-6 my-2"} perspective`}>
                        <div 
                            onMouseUp={()=>{
                                this.menuItemSelected(menuItem.id, menuItem.category),
                                this.menuAnimation(".dash-requests")
                            }} 
                            className={`dashSection gradient1 px-3 py-4 py-sm-5 shadow`}
                        >
                            <div className='z2'>
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
///////////////////////////////////////////////////////////////////////////////////////
////////////////////// RENDER HERE
////////////////////////////////////////////////////////////////////////////////////

    render() {

        return (
            <div className='row sameH'>
                {this.state.backAppear ? (
                <div className='col-3'>
                    <button onMouseUp={()=>{this.onClickButtonBack()}} className="btn btn-lg btn-block bckgcolor1 shadow">
                        Annuler
                    </button>
                </div>
                ):(
                    false
                )}
                {this.sectionsRender()}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        dashboardMenu, 
        dashboardMenuSelected
    }, dispatch),
});

const mapStateToProps = (state) => {
    return {
        menuDashboard : state.menuDashboard
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SectionDashboard)