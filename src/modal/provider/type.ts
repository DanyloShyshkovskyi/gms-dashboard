import { ICloseAlertDialog } from 'modal/components/alert-dialogs/close_only/type'
import { IDefaultAlertDialog } from 'modal/components/alert-dialogs/default/type'
import { IUserRoleAdd } from 'modal/components/dialogs/user_roles_add/type'

export type IDialogMap = {
  user_roles_add: IUserRoleAdd
}

export type IAlertDialogMap = {
  default: IDefaultAlertDialog
  close_only: ICloseAlertDialog
}

// Define a type for modal data, encompassing both dialog and alert types
type ModalData =
  | IDialogMap[keyof IDialogMap]
  | IAlertDialogMap[keyof IAlertDialogMap]

// Define the modal types
type ModalType = keyof IDialogMap | keyof IAlertDialogMap

// Define the state shape
export interface IModalState {
  type: ModalType
  data: ModalData
  isOpen: boolean
  isAlert: boolean
}

// Define the context shape
export type ModalContextType = {
  openDialog<T extends keyof IDialogMap>(type: T, data: IDialogMap[T]): void
  openAlertDialog<T extends keyof IAlertDialogMap>(
    type: T,
    data: IAlertDialogMap[T]
  ): void
  closeModal: () => void
}
