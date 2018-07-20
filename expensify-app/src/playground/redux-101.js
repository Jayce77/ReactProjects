import { createStore } from 'redux'

const store = createStore((state = {count: 0}, action) => {
  console.log('running')
  switch (action.type) {
    case "INCREMENT":
      const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + increment
      }
    case "DECREMENT":
    const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrement
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state
  }
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10

})

unsubscribe()