import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {
    consultShopList,
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
            pageLoaded : false,
            nameShop : "",
            street : "",
            city : "",
            country: "",
            association: "",

            files: [],
            accepted: [],
            rejected: []
        }
    }


    componentWillMount(){
        this.props.companyList()
        this.props.countriesListFrench()
        // https://restcountries.eu/rest/v2/
    }


/////////////////////////////////////////////////////////////////////////
/////////////////////// ENVOI DATA DANS LE STATE
/////////////////////////////////////////////////////////////////////////


    NameShopSelected(data){
        this.setState({ nameShop : data })
        console.log('=========NAME SHOP===========')
        console.log(data)
    }
    ShopAdressSelected(data){
        this.setState({ adress : data })
    }
    ShopCitySelected(data){
        this.setState({ city : data })
    }
    ShopCountrySelected(data){
        this.setState({ country : data })
    }
    ShopCompanySelected(data){
        this.setState({ association : data })
    }
    ShopImageSelected(data){
        this.setState({ image : data })
    }
    

/////////////////////////////////////////////////////////////////////////
/////////////////////// RETURNS OF COMPONENTS
/////////////////////////////////////////////////////////////////////////



    onDrop(files) {
        // console.log('=========DROPZONE FILES===========')
        // console.log(files)
        this.setState({ files : files});
    }





/////////////////////////////////////////////////////////////////////////
/////////////////////// RENDER
/////////////////////////////////////////////////////////////////////////




    render() {
        if(this.state.loaded !== true){
            window.scrollTo(0,0)
            this.setState({ loaded : true});
        }
        
        
        const {} = this.props


        var catchBrandHeader = this.state.nameShop === "" ? "Ajoutez un nouveau bar" : this.state.nameShop ;
        var catchNameHeader = this.state.nameShop === "" ? "" : this.state.city ;

        return (
            <div>
                
                <HeaderBackground 
                    title={[catchBrandHeader, catchNameHeader]}
                    logo={false} 
                    imgBckg={`${ this.state.files.length >=1 && this.state.files[0].preview }`} 
                    textCentered={true}
                    titleSize={this.state.nameShop === "" ? "2" : "1"}
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

                                <InputText type="text" index="1" label="Nom du bar" classNameGroup="mb-3" dataBack={this.NameShopSelected.bind(this)} />
                                <InputText type="text" index="2" label="Rue du bar" classNameGroup="mb-3" dataBack={this.ShopAdressSelected.bind(this)} />
                                <InputText type="text" index="3" label="Ville du bar" classNameGroup="mb-3" dataBack={this.ShopCitySelected.bind(this)} />


                                {this.props.countriesListFrenchReducer.length >= 1 ?
                                    (<SearchSelection
                                        dataBack={this.ShopCountrySelected.bind(this)} 
                                        index="4" 
                                        className="mb-3 shadow" 
                                        placeholder="Pays du bar"
                                        addition={false} 
                                        options={this.props.countriesListFrenchReducer}
                                    />) : (false)
                                }


                                <ButtonToggle oneSelect={false} options={this.props.companyBeerReducer} classNameGroup="company" classNameBtn=""/>


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

        companyList,
        countriesListFrench
    }, dispatch),
});

const mapStateToProps = (state) => {
    return {

        companyBeerReducer : state.companyBeerReducer,
        countriesListFrenchReducer : state.countriesListFrenchReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (AddBeerPage);