import React, {Component} from 'react'

export default class TodoItem extends Component {
  render(){
    return(<li onClick={() => {
      console.log("delete button clicked")
      this.props.deleteTodo(this.props.todo.id)
    }}>
    {this.props.todo.text}
    </li>)
  }
}