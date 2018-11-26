import React, { Component } from 'react';
import Title from './title/Title'
import TodoForm from './todo-form/TodoForm'
import TodoList from './todo-list/TodoList'
import './TodoApp.css';

class App extends Component {

  state = {
    data: [],
    todoItem: ""
  }

  setTodoItemState = (val) => {
    this.setState({todoItem: val})
  }


  getTodos(){
    fetch("http://localhost:5002/todos")
    .then( (data) => data.json())
    .then( todos => this.setState({data:todos}))
  }

  addTodo = () => {
    const newTodo = {text: this.state.todoItem}
    fetch("http://localhost:5002/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newTodo)
    })
    .then(() => this.getTodos())
  }

  deleteTodo = (id) => {
    return fetch(`http://localhost:5002/todos/${id}`, {
      method: "DELETE"
    })
    .then(() => this.getTodos())
  }

  componentDidMount() {
    this.getTodos()
  }

  render() {
    return (
      <div className="TodoApp">
      <Title />
      <TodoForm addTodo={this.addTodo} setTodoItemState={this.setTodoItemState}/>
      <TodoList todos={this.state.data} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
