import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {


  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(content, 5)
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button type="submit">create</button>
    </form>
  )
}

const mapDispatchToProps = {
  setNotification,
  createAnecdote
}


export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)