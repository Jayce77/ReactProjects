//Object destructuring

const person = {
  //name: "Jayce",
  age: 40,
  location: {
    city: 'Cleveland',
    temp: 83
  }
}

const {name: firstName = 'Anonymous', age, location:{ city, temp: temperature }} = person

console.log(`${firstName} is ${age}`)

console.log(`It's ${temperature} in ${city}`)

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //name: 'Penguin'
  }
}

const { publisher: { name: publisherName = 'Self-Published'} } = book
console.log(publisherName)

//Array destructuring
const address = ['800 Superior', 'Cleveland', 'Ohio', '44114']

const [, cityFromAddress, state = 'California'] = address

console.log(`You are in ${cityFromAddress} ${state}`)

const item = ['Coffee (hot)', '2.00', '2.50', '2.75']

const [menuItem, smallPrice, mediumPrice, largePrice] = item
console.log(`A medium ${menuItem} costs ${mediumPrice}`)