import React from 'react'
import ReactDOM from 'react-dom'
import validator from 'validator'

console.log(validator.isEmail('test@test.test'))

const template = React.createElement('p', {}, 'testing123')
ReactDOM.render(template, document.querySelector('#app'))