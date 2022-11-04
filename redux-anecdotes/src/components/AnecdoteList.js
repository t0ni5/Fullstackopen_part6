import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  const dispatch = useDispatch()
  const handleClickAndNotify = () => {
    handleClick()
    dispatch(setNotification(`you voted ${anecdote.content}`, 5))
  }
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClickAndNotify}>vote</button>
      </div>
    </div>
  )
}





const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }
    const filter = state.filter
    return state.anecdotes.filter(a => a.content.includes(filter))
  })


  return (

    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() =>
            dispatch(vote(anecdote))
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList