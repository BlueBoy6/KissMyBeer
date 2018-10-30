import React, { Component } from 'react'
import { Dropdown, Input, Icon } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/SearchSelectionStyle.css'



class SearchSelection extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentValue : "",
            optionsTab: [],
            loaded: false
        }
    }

    componentWillMount(){
        const {options, index} = this.props;
        const {optionsTab} = this.state

        const tab = []
        options.map((optionValue, i)=>{
            var optionTab = {
                key: i,
                value: optionValue,
                text: optionValue
            }
            tab.push(optionTab)
        })
        this.setState({ optionsTab: [...optionsTab, ...tab] }); 
    } 


    componentDidMount(){
        setTimeout(()=>{
            document.querySelectorAll(".searchSelection>input").forEach((that)=>{
                that.classList.add('form-control')
                that.classList.add('form-control-lg')
            })
            document.querySelectorAll(".search.icon").forEach((that)=>{
                that.classList.add('gradient2')
                that.innerHTML = `<img class="search-ico" src="/img/icons/search-ico.png"/>`
            })
        },1)
    }
    
    handleChange = (e, d) => {
        const {currentValue} = this.state
        var dataValue = d.value;
        this.setState({ currentValue : dataValue})
        this.props.dataBack(dataValue)
    }

    handleAddition = (data) => {
        const {optionsTab} = this.state;
        var newOptionTab = [{
            key: optionsTab.length,
            value: data.value,
            text: data.value
        }];
        this.setState({ optionsTab : [...optionsTab, ...newOptionTab] })
    }



    render(){

        const additionOrNotDropdown = (add) => {
            const {placeholder, className, index, options, addition} = this.props;
            const {currentValue, optionsTab} = this.state;
    
            var valueOptions = [];
            options.map((options, i)=>{
                var optionTab = {
                    key: i,
                    value: options,
                    text: options
                }
                valueOptions.push(optionTab)
            })



            if(add === true){
                return ( 
                    <Dropdown 
                        className={`searchSelection ${className} input${index}`}
                        placeholder={placeholder }
                        value={currentValue} 
                        options={valueOptions}
                        icon="search" 
                        fluid={true} 
                        search={true}
                        selection={true}
                        additionLabel='Ajoutez :'
                        allowAdditions={true}
                        onAddItem={ this.handleAddition.bind(this) }
                        onChange={this.handleChange.bind(this) }
                        noResultsMessage = "Aucun résultat trouvé"
                    >
                    </Dropdown> 
                )
            }else{

                    // const onFocusAddVisible = () =>{
                    //     document.querySelector(`.input${index} .menu`).classList.add('visible')
                    // }
                    // const onBlurRemoveVisible = () => {
                    //     document.querySelector(`.input${index} .menu`).classList.remove('visible')
                    // 
                return(
                <div className='containerInputSelection'>
                    <Dropdown 
                        className={`searchSelection ${className} input${index}`}
                        placeholder={placeholder }
                        value={currentValue}
                        icon="search" 
                        options={valueOptions}
                        noResultsMessage="Rien ne correspond à votre recherche"
                        fluid={true} 
                        search={true}
                        selection={true}
                        onChange={(e,d)=>{this.handleChange(e,d)} }

                    />
                    {/* <div className={`searchSelection ${className} input${index}`}>
                        <Input className='searchInput' >
                            <input

                                //value={`${this.state.currentValue}`} 
                                onFocus={()=>{onFocusAddVisible();this.handleChange.bind(this)}} 
                                onBlur={()=>{onBlurRemoveVisible()}} 
                                className="form-control form-control-lg" 
                            />
                            <Icon className="gradient2-action p-0" name='search-ico'>
                                <img className="search-ico" src="/img/icons/search-ico.png"/>
                            </Icon>
                        </Input>
                        <Dropdown.Menu scrolling>
                            {valueOptions.map((option,i) => <div className='item' key={i} value={option.value} onClick={this.handleChange.bind(this)}> {option.text} </div> )}
                        </Dropdown.Menu>
                    </div>
                    </Dropdown> */}
                </div>
                )
            }
        }

        return (
            <div>
                {additionOrNotDropdown(this.props.addition)}
            </div>
        )
    }


    
  }

  export default SearchSelection