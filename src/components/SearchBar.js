import React, { Component } from 'react'

//distribution de la donnée
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {consultBeerList, consultBeerBrands, beerSearchOne} from "../actions"


class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchText : "" 
    }
  }

  enterListenner(){
    let inputIn = document.querySelector(".search-bar .search-input .inputText");
    if(inputIn){
        inputIn.addEventListener('keydown', (event) => {
            if(event.key === "Enter"){
                this.letsSearch();
            }
        })
    }
  }
  

  render() {

    return (
        <div className='search-bar row no-gutters pb-3 radius'>
            <div className='search-form-group col-12 mx-0 p-3'>
              <div className='search-input'>
                  <input autoComplete="on" onKeyUp={this.changingTheSearch.bind(this)}  onFocus={this.enterListenner.bind(this)} type='text' className='inputText p-3' placeholder="Décapsulez votre recherche..."/>
                  <button onClick={this.letsSearch.bind(this)} className='submit-search-bar subtit gradient1-action shadow-sm p-3 mr-2'>CHERCHER</button>
              </div>
            </div>
        </div>
    )
  }



  

  changingTheSearch(event){
    this.setState({ searchText : event.target.value });
  }

  letsSearch(){
    this.props.beerSearchOne(this.state.searchText)
    console.log('my search : ',  this.state.searchText.toLowerCase())
  }

}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({consultBeerList, consultBeerBrands, beerSearchOne}, dispatch),
});

const mapStateToProps = (state) => {
  return {
      beerList : state.beerList,
      beerSearchOneReducer : state.beerSearchOneReducer
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (SearchBar)