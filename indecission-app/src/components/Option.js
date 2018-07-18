import React from 'react'

const Option = (props) => {
    return (
      <div>
        {props.text}
        {/* Alternative onClick={(e) => props.handleRemoveSingleOption(props.optionText)} */}
        <input name={props.text} type='button' value='Remove' onClick={props.handleRemoveSingleOption} />
      </div>
    )
}
export default Option