
import anecdoteService from '../services/anecdotes'
import { createSlice } from '@reduxjs/toolkit'
import { showNotice, hideNotice } from './noticeReducer'
import { setTimeOutId, resetTimeOut } from '../reducers/timeoutReducer'



// export const voteForAnecdote = (id) => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }

// export const newAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: {
//       content
//     }
//   }
// }


// export const newAnecdotes = (content) => {
//   return {
//     type: 'NEW_ANECDOTES',
//     data: {
//       content
//     }
//   }
// }



const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteForAnecdote(state, action) {
      const id = action.payload.id
      const changedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote)
    },
    newAnecdote(state, action) {
      return state.concat(action.payload)
    },
    newAnecdotes(state, action) {
      return action.payload
    },
    sortAnecdotes(state, action) {
      return state.sort((a, b) => b.votes - a.votes)
    }
  }
})



// const reducer = (state = [], action) => {
//   console.log('state now: ', state)
//   console.log('action', action)


//   switch (action.type) {
//     case 'VOTE':
//       const id = action.data.id
//       const anecdoteToChange = state.find(a => a.id === id)
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1
//       }

//       return state.map(anecdote =>
//         anecdote.id !== id ? anecdote : changedAnecdote)
//     case 'NEW_ANECDOTE':
//       return state.concat(action.data.content)
//     case 'NEW_ANECDOTES':
//       const anecdotes = action.data.content
//       return state.concat(anecdotes)
//     default:
//       return state
//   }
// }

export const { voteForAnecdote, newAnecdote, newAnecdotes, sortAnecdotes } = anecdoteSlice.actions


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(newAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.createNew(content)
    dispatch(newAnecdote(createdAnecdote))
  }
}

export const vote = anecdote => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    dispatch(voteForAnecdote(votedAnecdote))

  }
}

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(showNotice(content))
    dispatch(resetTimeOut())
    const id = setTimeout(() => {
      dispatch(hideNotice())

    }, `${time}000`)


    dispatch(setTimeOutId(id))

  }
}


export default anecdoteSlice.reducer

