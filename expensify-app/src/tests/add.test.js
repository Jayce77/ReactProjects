const add = (a, b) => a + b
const gernerateGreeting = name => `Hello ${name}`

test('should add two numbers', () => {
  const result = add(3, 4)
  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result} expected 7`)
  // }
  expect(result).toBe(7)
})

test('should display name', () =>{
  const name = 'Mike'
  const result = gernerateGreeting(name)
  expect(result).toContain(name)
})