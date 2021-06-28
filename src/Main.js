import React from 'react'
import {Form} from './Form'
import {List} from './List'
import './mainStyle.css'

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            id: 0,
            list : [
            ]
        }
    }

    getNewValue = (newValue) => {
        this.setState(prevSrate=> ({
            updateText : "",
            list: [ ...prevSrate.list,{
                id: this.state.id,
                listItemValue: newValue,
                isItemChecked: false,
                isUpdated: false,
                date: new Date().getTime()
            }],
            id: this.state.id+1
        }))
    }

    deleteItem = (id) => {
        let newList = this.state.list.filter(item=>item.id !== id)
        this.setState(prevState => ({
            ...prevState,
            list: newList
        }))
    }

    linethroughItem = (id) => {
        let newList = this.state.list.map(item => {
            if(item.id === id){
                item.isItemChecked = !item.isItemChecked
            }
            return item
        }
        )
        this.setState(prevState => ({
            ...prevState,
            list:newList
        }))
    }
    getUpdatedTaskValue = (evt) => {
        this.setState(prevState => ({
            ...prevState,
            updateText: evt.target.value
        }))
    }

    updateTask = (id) => {
        let newList = this.state.list.map(item => {
            if(item.id === id){
                item.isUpdated = true
            }
            return item
        })
        this.setState(prevState => ({
            ...prevState,
            list:newList
        }))
    }

    confirmUpdate = (value, id) => {
        let newList = this.state.list.map(item => {
            if(item.id === id){
                item.isUpdated = false;
                item.listItemValue = value
            }
            return item
        })

        this.setState(prevState => ({
            ...prevState,
            list:newList
        }))
    }

    cancelUpdate = (id) => {
        let newList = this.state.list.map(item => {
            if(item.id === id){
                item.isUpdated = false
            }
            return item
        })
        this.setState(prevState => ({
            ...prevState,
            list:newList
        }))
    }

    sortByTodo = () => {
        let unsortedList = this.state.list
        let sortedList = []
        let checkedArr = []
        let uncheckedArr = []
        this.state.list.forEach(item => {
            if(item.isItemChecked){
                checkedArr.push(item)
            } else {
                uncheckedArr.push(item)
            }
        })
        sortedList = [...uncheckedArr, ...checkedArr]
            this.setState(prevState => ({
                ...prevState,
                list:sortedList,
                isRightBtnActive: !this.state.isRightBtnActive,
                isLefttBtnActive: !this.state.isLeftBtnActive,
            }))    
    }

    sortByDate = () => {
        let sortedList = this.state.list
        sortedList.sort((a,b) => a.date - b.date)
        this.setState(prevState => ({
            ...prevState,
            isRightBtnActive: !this.state.isRightBtnActive,
            isLefttBtnActive: !this.state.isLeftBtnActive,

            list:sortedList
        }))
    }


    render(){
        return(
            <div className="container">
                <h1 className="headline">Todo List</h1>
                <Form 
                    getNewValue={this.getNewValue} 
                    mainStateLength={this.state.list.length}
                />
                <List 
                    list={this.state.list} 
                    isUpdate={this.state.isUpdate} 
                    deleteItem={this.deleteItem} 
                    linethroughItem={this.linethroughItem} 
                    updateTask={this.updateTask} 
                    confirmUpdate={this.confirmUpdate}
                    cancelUpdate={this.cancelUpdate}
                />
                <button className="sort-btn left" onClick={this.sortByTodo}>Sort by toDo</button>
                 <button className="sort-btn right" onClick={this.sortByDate}>Sort by date</button>
            </div>
        )
    }
}