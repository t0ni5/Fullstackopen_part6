const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const plusGoodState = {
        ...state,
        good: state.good + 1
      }
      return plusGoodState
    case 'OK':
      const plusOkState = {
        ...state,
        ok: state.ok + 1
      }
      return plusOkState
    case 'BAD':
      const plusBadState = {
        ...state,
        bad: state.bad + 1
      }
      return plusBadState
    case 'ZERO':
      return initialState
    default: return state
  }

}

export default counterReducer