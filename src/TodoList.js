import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'

function TodoList({ todos, removeTodo, editTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <>
            <Todo
              task={todo.task}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
              id={todo.id}
              key={todo.id}
            />
            {i < todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
