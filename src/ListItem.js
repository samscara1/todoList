import React from 'react'
import './listItemStyle.css'

export class ListItem extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     listItemLinethrough: false
        // }
    }

    handleDeleteClick = () => {
        this.props.deleteItem(this.props.item.id)
    }

    // linethroughItem = (check) =>
    // this.setState({
    //     listItemLinethrough: check
    // })

    handleCheckboxClick = () => {
        // console.log("this is checkbox", evt.target.checked)
        // console.log('this is itemid', this.props.item.id)
        this.props.linethroughItem(this.props.item.id)
        
    }

    handleUpdateClick = () => {
        this.props.updateTask(this.props.item.id)
    }

    render(){
        let className = 'task__text'
        if(this.props.item.isItemChecked){
            className += ' task__text_linethrough'
        } else {
            className = 'task__text'
        }
        return(
            <li className="list__task task">
                <input 
                    className="task__checkbox"
                    type="checkbox" 
                    onChange={this.handleCheckboxClick} 
                    checked={this.props.item.isItemChecked} 
                />
                <span className={className}>{this.props.item.listItemValue}</span>
                <div className="task__btn-container">
                    <input 
                        className="task__btn"
                        type="submit" 
                        value="Update" 
                        onClick={this.handleUpdateClick} 
                    />
                    <input 
                        className="task__btn"
                        type="submit" 
                        onClick={this.handleDeleteClick} 
                        value="Delete"/>
                </div>
            </li>
        )
    }
} 