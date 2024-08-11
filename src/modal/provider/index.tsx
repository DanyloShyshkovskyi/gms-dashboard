import React, {
  ReactNode,
  Suspense,
  createContext,
  lazy,
  useContext,
  useMemo,
  useState,
} from 'react'

import { AlertDialog, AlertDialogPortal } from 'shared/ui/alert-dialog'
import { Dialog, DialogPortal } from 'shared/ui/dialog'

import { IModalState, ModalContextType } from './type'

// Create the context
const ModalContext = createContext<ModalContextType | undefined>(undefined)

// Lazy load the modal components
const RenderModalContent = ({
  type,
  data,
  isAlert,
}: {
  type: IModalState['type']
  data: IModalState['data']
  isAlert: IModalState['isAlert']
}) => {
  /* @vite-ignore */
  const ModalComponent = lazy(
    () =>
      import(
        `../components/${isAlert ? 'alert-dialogs' : 'dialogs'}/${type}/index.tsx`
      )
  )
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModalComponent {...data} />
    </Suspense>
  )
}

// Create the ModalProvider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState<IModalState>({
    type: 'default',
    data: {
      title: '',
      description: '',
    },
    isOpen: false,
    isAlert: false,
  })

  const contextValue = useMemo<ModalContextType>(
    () => ({
      openDialog: (type, data) => {
        setModal({ type, data, isOpen: true, isAlert: false })
      },
      openAlertDialog: (type, data) => {
        setModal({ type, data, isOpen: true, isAlert: true })
      },
      closeModal: () => {
        setModal((prev) => ({ ...prev, isOpen: false }))
      },
    }),
    []
  )
  const isAlert = modal.isAlert

  const Modal = isAlert ? AlertDialog : Dialog
  const ModalPortal = isAlert ? AlertDialogPortal : DialogPortal

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Modal
        onOpenChange={(isOpen) => !isOpen && contextValue.closeModal()}
        open={modal.isOpen}
      >
        <ModalPortal>
          <RenderModalContent {...modal} />
        </ModalPortal>
      </Modal>
    </ModalContext.Provider>
  )
}

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
