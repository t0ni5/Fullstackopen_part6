import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer'
import noticeReducer from './reducers/noticeReducer'
import filterReducer from './reducers/filterReducer'
import timeoutReducer from './reducers/timeoutReducer'



const store = configureStore({
  reducer: {
    anecdotes: reducer,
    notification: noticeReducer,
    filter: filterReducer,
    timeout: timeoutReducer,
  }
})





export default store