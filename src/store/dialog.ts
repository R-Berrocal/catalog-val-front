import { StateCreator } from 'zustand';

export interface DialogSlice {
  isOpenDialog: boolean;
  id: string;
  showDialog: (id: string) => void;
  closeDialog: () => void;
}

export const createDialogSlice: StateCreator<
  DialogSlice,
  [],
  [],
  DialogSlice
> = (set) => ({
  id: '',
  isOpenDialog: false,
  showDialog: (id) => set(() => ({ isOpenDialog: true, id })),
  closeDialog: () => set(() => ({ isOpenDialog: false, id: '' })),
});
