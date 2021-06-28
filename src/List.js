import React from 'react'
import {ListItem} from './ListItem'
import {UpdateItem} from './UpdateItem'
import './listStyle.css'

export class List extends React.Component{
    constructor(props){
        super(props)
    }

    // handleLisItem = () => {
    //     let list = document.querySelector('.list')
    //     list.append(`<li>${this.props.mainValue}</li>`)
    // }

    showChildren = (evt) =>{
        console.log(evt.target)
    } 

    render(){
        return(
            <ul className="list">
                {this.props.list.map(item=>{
                    if(item.isUpdated){
                        return (
                            <UpdateItem 
                                oldValue={item.listItemValue} 
                                key={item.id}
                                confirmUpdate={this.props.confirmUpdate}
                                cancelUpdate={this.props.cancelUpdate}
                                id={item.id}
                            />
                        )
                    }
                    return (
                        <ListItem 
                            key={item.id} 
                            item={item} 
                            deleteItem={this.props.deleteItem} 
                            linethroughItem={this.props.linethroughItem}
                            updateTask={this.props.updateTask}
                        />
                    )
                    })}
            </ul>
        )
    }
}