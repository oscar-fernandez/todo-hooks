import React from 'react'
import useToggleState from './hooks/useToggleState'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import EditTodoForm from './EditTodoForm'

function Todo({ task, completed, id, removeTodo, editTodo, toggleTodo }) {
  const [isEditing, toggle] = useToggleState(false)
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            onClick={() => toggleTodo(id)}
            checked={completed}
            tabIndex='-1'
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo
