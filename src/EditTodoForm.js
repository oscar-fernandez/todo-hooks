import React from 'react'
import useInputState from './hooks/useInputState'
import TextField from '@material-ui/core/TextField'

function EditTodoForm({ id, editTodo, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        editTodo(id, value)
        reset()
        toggleEditForm()
      }}
      style={{
        marginLeft: '1rem',
        width: '75%',
      }}
    >
      <TextField
        margin='normal'
        fullWidth
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm
