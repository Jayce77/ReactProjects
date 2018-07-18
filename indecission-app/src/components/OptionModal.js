import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({selectedOption, handleClearSelectedOption}) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClearSelectedOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={handleClearSelectedOption}>OK</button>
  </Modal>
)

export default OptionModal