class Person {
    
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {

    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()

        if(this.hasMajor()) description += ` ${this.name}'s major is ${this.major}`
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation =homeLocation
    }
    hasHomeLocation(){
        return !!this.homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.hasHomeLocation()) greeting += ` I am visiting from ${this.homeLocation}`
        return greeting
    }
}

const me = new Person('Jayce Crowther', 39)
const other = new Person()
const student = new Student('Angela', 10, 'English')
const newStudent = new Student('Melody', 10)
const travler = new Traveler('Paul Van Dyk', 45, 'Berlin')
const newTravler = new Traveler('Bad Boy Bill', 48)