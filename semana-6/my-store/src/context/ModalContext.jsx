import { createContext, useState } from "react"
import ModalComponent from "../components/Modal/ModalComponent"

export const ModalContext = createContext({
    showModal: false,
    setShowModal: () => {},
    data: {},
    setData: () => {}
})

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState({})

    return (
        <ModalContext.Provider value={{showModal, setShowModal, data, setData}}>
            {children}
            {showModal && <ModalComponent/>}
        </ModalContext.Provider>
    )
}
