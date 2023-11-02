import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

import { AuthSlice, createAuthSlice } from './auth';
import { DialogSlice, createDialogSlice } from './dialog';
import { AlertRemoveSlice, createAlertRemoveSlice } from './alert-remove';

const usePersistedStore = create<AuthSlice & DialogSlice & AlertRemoveSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createDialogSlice(...a),
        ...createAlertRemoveSlice(...a),
      }),
      {
        name: 'bound-persisted-store',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default usePersistedStore;
