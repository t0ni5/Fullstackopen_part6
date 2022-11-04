import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    showNotice(state, action) {
      return state = action.payload
    },
    hideNotice(state,action) {
      return state = initialState
    }
  }
})

export const { showNotice, hideNotice } = noticeSlice.actions
export default noticeSlice.reducer