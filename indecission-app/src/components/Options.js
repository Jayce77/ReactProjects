import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div>
    <input type="button" onClick={props.handleRemoveAll} value="Remove All" />
    { props.options.length === 0 && <p>Please add an option to get started</p> }
    {props.options.map((item, index) => (
        <Option key={index} text={item} handleRemoveSingleOption={props.handleRemoveSingleOption } />
    ))}
  </div>
)

export default Options