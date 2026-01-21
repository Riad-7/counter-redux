export const increment = 'counter/increment'
export const decrement = 'counter/decrement'

export const CounterReducer = (state = {value : 1}, action) => {
    switch(action.type) {
        case increment : return {value: state.value + 1}
        case decrement : return {value: state.value - 1}
        default :
            return state
    }
        
}