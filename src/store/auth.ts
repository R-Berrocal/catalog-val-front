import { StateCreator } from 'zustand'

import { User, LoginResponse } from '../shared/common/interfaces'

export interface AuthSlice {
  user: User | null
  token: string
  setUser: (payload: LoginResponse) => void
  removeUser: () => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  user: null,
  token: '',
  setUser: ({ token, user }) => set({ token, user }),
  removeUser: () => {
    set({ user: null, token: '' })
    localStorage.removeItem('token')
  },
})
