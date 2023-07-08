import React, { useContext } from 'react'
import {Modal} from "react-bootstrap"
import { ModalContext } from '../../context/ModalContext'

export default function ModalComponent() {

  const {showModal, setShowModal, data, setData} = useContext(ModalContext)

  const handleShow = () => {
    setShowModal(false)
    setData({})
  }

  return (
    <>
      <Modal>
        <Modal.Header closeButton onClick={handleShow}>
          <h4>Isso é um Header</h4>
        </Modal.Header>
        <Modal.Title className='text-center'>
          Isso é um título
        </Modal.Title>
        <Modal.Body>
          Body
        </Modal.Body>
      </Modal>
    </>
  )
}
