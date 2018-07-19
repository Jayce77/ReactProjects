import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <input 
        className='button button--link'
        type="button" 
        onClick={props.handleRemoveAll} 
        value="Remove All" 
      />
    </div>
    { props.options.length === 0 
      && <p className='widget__message'>Please add an option to get started</p> }
    {props.options.map((item, index) => (
        <Option 
          key={item}
          count={index + 1}
          text={item} 
          handleRemoveSingleOption={props.handleRemoveSingleOption } 
        />
    ))}
  </div>
)

export default Options