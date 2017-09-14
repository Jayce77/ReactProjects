import expect from 'expect';

export default function CounterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
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

console.log('Tests passed!');