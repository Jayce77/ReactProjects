import expect from 'expect';

function CounterReducer(state = 0, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  
  switch action.type {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default
      return state;
  }
}

expect(
CounterReducer(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
CounterReducer(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
CounterReducer(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
CounterReducer(1, { type: 'DECREMENT' })
).toEqual(0);

expect(
CounterReducer(1, { type: 'SOMETHING_ELSE' })
).toEqual(1);

expect(
CounterReducer(undefined, {})
).toEqual(0);

console.log('Tests passed!');

export default CounterReducer