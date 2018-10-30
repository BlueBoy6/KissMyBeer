

import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {
    UserDatas
} from "../../actions"

class AccountTopBar extends Component {

    componentWillMount(){
        this.props.UserDatas(0)
    }
    

  render() {

    const name = this.props.userDatasReducer.name
    const avatar = this.props.userDatasReducer.avatar
      
      return (
          <div className=' container fixed-top'>
            <div className='top-bar-account '>
                <div className='row p-1 justify-content-end'>
                    <div className='dash-user-name col-4 p-2 align-self-center'>
                        <div className='subtit text-right'>
                            Salut {name} ! Une petite binch' ?
                        </div>
                    </div>
                    <div className='dash-user-avatar col-1 p-1'>
                        <div className='bckg-before gradient1'>
                            
                        </div>
                        <div className='mask'>
                            <img className='imgH' src={avatar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        UserDatas
    }, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userDatasReducer : state.userDatasReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AccountTopBar);
