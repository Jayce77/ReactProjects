// defaults come before named and can be renamed
import subtract, { square, add } from './utils'
import isSenior, { isAdult, canDrink } from './playground/person'

console.log('app.js is running!')
console.log(square(8))
console.log(add(8, 6))
console.log(subtract(8, 6))
console.log(isAdult(8))
console.log(canDrink(82))
console.log(isSenior(82))