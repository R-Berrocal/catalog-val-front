import { StateCreator } from 'zustand'

export interface AlertRemoveSlice {
  idRemove: string
  isAlertOpen: boolean
  showAlert: (id: string) => void
  closeAlert: () => void
}

export const createAlertRemoveSlice: StateCreator<
  AlertRemoveSlice,
  [],
  [],
  AlertRemoveSlice
> = (set) => ({
  idRemove: '',
  isAlertOpen: false,
  showAlert: (idRemove) => set(() => ({ isAlertOpen: true, idRemove })),
  closeAlert: () => set(() => ({ isAlertOpen: false, idRemove: '' })),
})
