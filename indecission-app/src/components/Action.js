import React from 'react'

const Action = (props) => (
  <div>
    <input
      type="button"
      onClick={props.handlePick}
      value="What should I do?"
      disabled={!props.hasOptions}
    />
  </div>
)
export default Action