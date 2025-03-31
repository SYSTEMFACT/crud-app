import { useState } from "react"

export function useModal() {
    const [modal, setModal] = useState({
        isOpen: false,
        child: null,
        showModal: () => {
          setModal((prev)=>({
            ...prev,
            isOpen: true
          }))
        },
        closeModal: () => {
          setModal((prev)=>({
            ...prev,
            isOpen: false
          }))
        },
        setChild: (child) => {
          setModal((prev)=>({
            ...prev,
            child
          }))
        }
      })
    
  return modal
}
