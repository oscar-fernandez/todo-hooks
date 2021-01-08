import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Clean fishtank', completed: false },
    { id: 2, task: 'Wash the car', completed: true },
    { id: 3, task: 'Get a job', completed: false },
  ]
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
  }
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>Todos With Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1.5rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
