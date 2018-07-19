import React from 'react'

const Option = (props) =>  (
  <div className='option'>
    <p className='option__text'>{`${props.count}. ${props.text}`}</p>
    {/* Alternative onClick={(e) => props.handleRemoveSingleOption(props.optionText)} */}
    <input
      className='button button--link'
      name={props.text} 
      type='button' 
      value='Remove' 
      onClick={props.handleRemoveSingleOption} 
    />
  </div>
)

export default Option