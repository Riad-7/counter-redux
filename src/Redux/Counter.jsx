import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from './Reducers/CounterReducer'

export default function Counter({counter, onIncrement, onDecrement}) {
    const decrement = () => {
        onDecrement()
    }
    const increment = () => {
        onIncrement()
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={decrement}>dencrement</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}



export const CounterStore = connect(
    (state) => ({
        counter: state.value
    }), dispatch => ({
        onIncrement : value => dispatch({ type: increment, payload: value }),
        onDecrement : value => dispatch({ type: decrement, payload: value })
    })
)(Counter)