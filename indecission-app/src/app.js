import React from 'react'
import ReactDOM from 'react-dom'
import validator from 'validator'

console.log(validator.isEmail('test@test.test'))

const template = <p>This is JSX transpiled by babel in Webpack</p>
ReactDOM.render(template, document.querySelector('#app'))