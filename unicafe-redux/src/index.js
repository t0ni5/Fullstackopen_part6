import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const calculateAverage = () => {
    if (calculateAll() === 0) {
      return 0
    }

    return (store.getState().good - store.getState().bad) / calculateAll()
  }

  const calculateAll = () => {
    return store.getState().good + store.getState().ok + store.getState().bad
  }

  const calculatePositive = () => {
    if (calculateAll() === 0) {
      return 0
    }
    return store.getState().good  / calculateAll() + ' %'
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad </button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok} </div>
      <div>bad {store.getState().bad}</div>
      <div>
        <h1>Statistics</h1>
        <div>all {calculateAll()} </div>
        <div>average {calculateAverage()} </div>
        <div>positive {calculatePositive()}</div>


      </div>


    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
