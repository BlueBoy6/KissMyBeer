import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../style/SearchSelectionStyle.css'



class SearchSelectionMultiple extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentValue : "",
            optionsTab: [],
            loaded: false
        }
    }
    

    handleChange = (event, data) => {
        const {currentValue} = this.state
        var dataValue = data.value;
        this.setState({ currentValue : dataValue})
        this.props.dataBack(dataValue)
    }

    handleAddition = (event, data) => {
        const {optionsTab} = this.state;
        var newOptionTab = [{
            key: optionsTab.length,
            value: data.value,
            text: data.value
        }];
        this.setState({ optionsTab : [...optionsTab, ...newOptionTab] })
    }


    render(){
        const {placeholder, className, index, options} = this.props;
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

        return (
            <div className={`searchSelectionMultiple ${className}`}>
                <Dropdown 
                    className={`input${index} form-control form-control-lg`}
                    placeholder={placeholder } 
                    fluid 
                    multiple
                    icon='delete' 
                    selection 
                    options={valueOptions} 
                />
            </div>
        )
    }


    
  }

  export default SearchSelectionMultiple