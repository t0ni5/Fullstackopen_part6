import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useEffect } from 'react'
import { newAnecdotes, sortAnecdotes, initializeAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'




const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  useEffect( () => {
    dispatch(sortAnecdotes())
  },[state, dispatch])


  



  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {state.notification ? <Notification /> : ''}
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App