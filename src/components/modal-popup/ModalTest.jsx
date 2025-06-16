import React, { useState } from 'react'
import Modal from './index'
import './style.css'

const ModalTest= () => {
  const [showModalPopup, setShowModalPopup] = useState(false)

  const handleToggleModalPopup = () => {
    setShowModalPopup((prev) => !prev)
  }

  const onClose = () => {
    setShowModalPopup(false)
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        showModalPopup && <Modal onClose={onClose} />
      }
    </div>
  )
}

export default ModalTest


