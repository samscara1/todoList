import React from 'react'
import './formStyle.css'


export class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formValue: ""
        }
    }

    handleInputValue = (evt) => {
        this.setState({
            ...this.state,
            formValue: evt.target.value
        })
    }

    handleTextCLick = (evt) => {
        if(evt.code === "Enter"){
            if(this.state.formValue !== ""){
                this.props.getNewValue(this.state.formValue)
                this.setState({
                    formValue: ""
                })
            }
        }
    }

    handleButton = () => {
        if(this.state.formValue !== ""){
            this.props.getNewValue(this.state.formValue)
            this.setState({
                formValue: ""
            })
        }
    }


    render(){
        return(
            <div className="new-task-form">
                <input 
                    className="new-task-form__text-input" 
                    type="text" 
                    onKeyDown={this.handleTextCLick}
                    onChange={this.handleInputValue}
                    value={this.state.formValue}
                    placeholder="Enter your task"
                />
                <input 
                    className="new-task-form__submit-btn" 
                    type="submit" value="Add" 
                    onClick={this.handleButton}
                />
            </div>
        )
    }
}