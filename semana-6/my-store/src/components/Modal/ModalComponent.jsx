import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

export default function ModalComponent() {

  const {showModal, setShowModal, data, setData} = useContext(ModalContext)

  const handleShow = () => {
    setShowModal(false)
    setData({})
  }

  return (
    <>
      
    </>
  )
}
