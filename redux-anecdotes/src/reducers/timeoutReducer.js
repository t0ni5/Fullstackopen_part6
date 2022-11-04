import { createSlice } from '@reduxjs/toolkit'


const timeoutSlice = createSlice({
  name: 'timeout',
  initialState: 0,
  reducers: {
    setTimeOutId(state, action) {
      console.log(action.payload)
      console.log(state)
      const id = action.payload
      return state = id

    },
    resetTimeOut(state, action) {
      if (state != 0) {
        clearTimeout(state)
      }
      return state = 0
    }
  }
})

export const { setTimeOutId, resetTimeOut } = timeoutSlice.actions
export default timeoutSlice.reducer