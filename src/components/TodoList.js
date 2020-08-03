import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'


const api_url = 'http://localhost:3000/api/v1/todos'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // items[0] = Todo #1
    // items[1] = Todo #2
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getTasks()
  }
  
  getTasks() {
    fetch(api_url)
    .then(response => response.json())
    .then(response_items => { 
      this.setState({
        items: response_items
      })
    })
  }
  
  render() {
    return (
      <div>
        <TodoForm />
        <ul id='todo_list'>
          {this.state.items.map((item) => 
            <TodoItem key={item.id} item={item.task} />
          )}
        </ul>
      </div>
    )
  }
}

export default TodoList