import React, {Component} from 'react'
import TodoItem from '../todo-item/TodoItem'

export default class TodoList extends Component {
  render(){
    const todoNode = this.props.todos.map((todo) => {
      return (<TodoItem todo={todo} key={todo.id} deleteTodo={this.props.deleteTodo}/>)
    })
    return(<ul>{todoNode}</ul>)
  }
}