import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {
    consultBeerBrands,
    consultBrandModels,
    consultShopList,
    categoryList,
    companyList,
    countriesListFrench
} from "../actions"

import DropzoneComponent from 'react-dropzone-component';
import ReactDOMServer  from 'react-dom/server'

import Dropzone from 'react-dropzone'

import axios from 'axios'
import {Link } from 'react-router-dom'

import SearchSelection from './SearchSelection'
import SearchSelectionMultiple from './SearchSelectionMultiple'
import InputText from './InputText'
import ButtonToggle from './ButtonToggle'
import HeaderBackground from '../components/dumbComponent/HeaderBackground'
import HeaderTextBckg from './dumbComponent/HeaderTextBckg'

class AddBeerPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            loaded : false,
            brand : "",
            name: "",
            categorie: "",
            country: "",
            alcool: "",
            association: "",
            type : "",

            files: [],
            accepted: [],
            rejected: []

        }
    }


    componentWillMount(){
        this.props.consultBeerBrands()
        this.props.categoryList()
        this.props.companyList()
        this.props.countriesListFrench()
        // https://restcountries.eu/rest/v2/

        
            

    }


/////////////////////////////////////////////////////////////////////////
/////////////////////// ENVOI DATA DANS LE STATE
/////////////////////////////////////////////////////////////////////////


    BeerBrandSelected(data){
        this.setState({ brand : data })
        this.props.consultBrandModels(data)
    }
    BeerModelSelected(data){
        this.setState({ name : data })
    }
    BeerCategorySelected(data){
        this.setState({ category : data })
    }
    BeerCompanySelected(data){
        this.setState({ company : data })
    }
    BeerCountrySelected(data){
        this.setState({ country : data })
    }
    BeerAlcoolSelected(data){
        this.setState({ alcool : data })
    }
    BeerImageSelected(data){
        this.setState({ image : data })
    }
    

/////////////////////////////////////////////////////////////////////////
/////////////////////// RETURNS OF COMPONENTS
/////////////////////////////////////////////////////////////////////////


    BrandSearch(){
        
        if(this.state.brand !== ""){
            var brand = [this.state.brand]
            var dataBeerList = [...this.props.beerBrandsList, ...brand ]
        }

        if(this.props.beerBrandsList.length>=1){
            return <SearchSelection
                        dataBack={this.BeerBrandSelected.bind(this)} 
                        index="1" 
                        className="mb-3 shadow" 
                        placeholder="La marque de la bière"
                        addition={true}
                        options={this.state.brand === "" ? this.props.beerBrandsList : dataBeerList}
                    />
        }
    }


    BrandModelsSearch(beersModelOfBrandReducer){
        // Lors de la recherche si le nom de la bièrre contient un carctère 
        // il va faire apparaitre la liste avec le nouvel ajout "name"
        if(this.state.name !== ""){
            var name = [this.state.name]
            var dataBeerNameList = [...beersModelOfBrandReducer, ...name ]
        }

        // si le nom de la bière est sélectionné il fait apparaitre le champ du model
        if(this.state.brand !== ""){
            return <SearchSelection 
                        dataBack={this.BeerModelSelected.bind(this)}
                        index="2" 
                        className="mb-3 shadow" 
                        placeholder="Le nom de la bière"
                        addition={true} 
                        options={ this.state.name === "" ? beersModelOfBrandReducer : dataBeerNameList}
                    />
        }
    }
    CountriesListInput(){
        this.props.countriesListFrenchReducer.length >= 1 && <SearchSelection
                        dataBack={this.BeerCountrySelected.bind(this)} 
                        index="4" 
                        className="mb-3 shadow" 
                        placeholder="Pays d'origine de la bière"
                        addition={false} 
                        options={this.props.countriesListFrenchReducer}
                    />
    }

    onDrop(files) {
        // console.log('=========DROPZONE FILES===========')
        // console.log(files)
        this.setState({ files : files});
    }

/////////////////////////////////////////////////////////////////////////
/////////////////////// RENDER
/////////////////////////////////////////////////////////////////////////




    render() {
        if(!this.state.loaded){
            window.scrollTo(0,0)
            this.setState({ loaded : true })
        }
        
        

        const beerBrands = this.props.beerBrandsList;
        const {
            beersModelOfBrandReducer,
            companyBeerReducer,
            categoryBeerReducer,
        } = this.props


        var catchBrandHeader = this.state.brand === "" ? "Ajoutez votre dernière découverte" : this.state.brand ;
        var catchNameHeader = this.state.brand === "" ? "" : this.state.name ;

        return (
            <div>
                
                <HeaderBackground 
                    title={[catchBrandHeader, catchNameHeader]}
                    logo={false} 
                    imgBckg={`${ this.state.files.length >=1 && this.state.files[0].preview }`} 
                    textCentered={true}
                    titleSize={this.state.brand === "" ? "2" : "1"}
                />
                <div className='container m-neg-40'>
                    <div className='row justify-content-center'>
                        <div className='col'>
                                <div className='mb-3'>
                                    <Dropzone
                                        accept="image/jpeg, image/png"
                                        onDrop={this.onDrop.bind(this)}
                                        className="dropzone gradient2-action  shadow py-3 px-2 py-sm-5"
                                    >
                                        {this.state.files.length === 0 ? (
                                            <div className='justify-content-center default-message py-3 py-sm-1'>
                                                <img src={`/img/icons/upload-ico.png`}/>
                                                <span className='pl-3'>Uploadez votre image !</span>
                                            </div>
                                        ) : (
                                            <div>
                                            <h2>Images Uploadés :</h2>
                                                <ul className='py-2 px-3 row d-inline-flex'>
                                                {this.state.files.map((f,i) => {
                                                    return (
                                                        <li className="col-6 col-sm-2 listOfImgThumb p-2" key={i}>
                                                            <div className='img-thumb-container'>
                                                                <img className="img-thumbnail radius" src={f.preview}/>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                                </ul>
                                                <div className='py-2'>
                                                    Cliquez à nouveau pour uploader de nouvelles images
                                                </div> 
                                            </div>
                                        )}
                                        {/* {this.state.files.length >= 1 && (
                                            
                                                        )} */}
                                    </Dropzone>                                
                                </div>

                                <div className='row mb-3'>
                                    <div className='col justify-content-center mx-auto'>
                                        <Link to='/'>
                                            <button type="submit" className="btn btn-block py-3 bckgcolor1  btn-lg shadow">Revenir à l'accueil</button>
                                        </Link>
                                    </div>
                                </div>

                                {this.BrandSearch()}
                                {this.BrandModelsSearch(beersModelOfBrandReducer)}


                                <ButtonToggle oneSelect={true} options={categoryBeerReducer} classNameGroup="category" classNameBtn=""/>

                                {this.CountriesListInput()}


                                <div className='inputRange form-group gradient2 radius shadow p-3'>
                                    <label className="textStandart">Degré d'alcool{this.state.alcool && " : "+this.state.alcool+"°"}</label>
                                    <input onChange={(e)=>{ this.BeerAlcoolSelected(e.target.value)}} type="range" className="form-control-range" min="0.5" max ="30" step="0.5"/>
                                </div>

                                <ButtonToggle oneSelect={false} options={companyBeerReducer} classNameGroup="company" classNameBtn=""/>


                                <div className='justify-content-center mt-5 mb-5'>
                                    <button type="submit" className="btn title2 gradient2-action py-4 btn-lg btn-block shadow">Ajoutez !</button>
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
        consultBeerBrands,
        consultBrandModels,
        categoryList,
        companyList,
        countriesListFrench
    }, dispatch),
});

const mapStateToProps = (state) => {
    return {
        beerBrandsList : state.beerBrandsList,
        beersModelOfBrandReducer : state.beersModelOfBrandReducer,
        categoryBeerReducer : state.categoryBeerReducer,
        companyBeerReducer : state.companyBeerReducer,
        countriesListFrenchReducer : state.countriesListFrenchReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AddBeerPage);