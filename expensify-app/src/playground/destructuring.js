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
    name: 'Penguin'
  }
}

const { publisher: { name: publisherName = 'Self-Published'} } = book
console.log(publisherName)