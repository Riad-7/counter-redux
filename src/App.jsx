import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter, { CounterStore } from './Redux/Counter'
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <CounterStore />
      </Provider>
    </>
  )
}

export default App
