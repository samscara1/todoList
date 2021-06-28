import React from 'react'

export class Check extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
    }

    handleCheckbox = (evt) =>{
        console.log("this is checkbox", evt.target.checked)
        this.props.linethroughItem(evt.target.checked)
    }

    render(){
        return(
            <input type="checkbox" onChange={this.handleCheckbox}/>
        )
    }
}