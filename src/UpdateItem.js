import React from 'react'
import './updateItemStyle.css'

export class UpdateItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: this.props.oldValue
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("evt.target", evt)
    }

    handleChange = (evt) => {
        evt.preventDefault()
        console.log("onChange", evt.target.value)
        this.setState({
            inputValue: evt.target.value
        })
    }

    handleConfirmUpdate = () => {
        this.props.confirmUpdate(this.state.inputValue, this.props.id)
    }

    handleCancelUpdate = () => {
        this.props.cancelUpdate(this.props.id)
    }

    render(){
        return(
            <li className="list__task task">
                <div></div>
                <input 
                className="update-task__text"
                type="text" 
                value={this.state.inputValue} 
                onChange={this.handleChange}/>
                <button className="task__btn update-btn" onClick={this.handleConfirmUpdate}>Update</button>
                <button className="task__btn" onClick={this.handleCancelUpdate}>Cancel</button>
            </li>
        )
    }
}