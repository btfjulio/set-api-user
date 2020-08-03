import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api_url: props.api_url,
      task: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTaskChange = this.handleTaskChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.formSubmit(event.target)
  }

  async formSubmit(formData) {
    var data = new FormData(formData)
    var response = await fetch(
      this.state.api_url, {
      method: "POST",
      mode: 'cors',
      body: data
    })
    var responseJson = await response.json()
    this.props.updateTodoList(responseJson)
  }

  handleTaskChange(e) {
    this.setState({
      task: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          id="todo_form"
          autoComplete='off'
        >
          <TextField
            id='task_input'
            label='Task Description'
            variant='outlined'
            type='text'
            name='todo[task]'
            onChange={this.handleTaskChange}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
          >Add Task</ Button>
        </form>
      </div>
    )
  }
}

export default TodoForm;