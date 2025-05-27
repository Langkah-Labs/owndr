import { create } from 'zustand'

interface GlobalStoreType {
  isLoginOpen: boolean
  setIsLoginOpen: (props: boolean) => void
  isSignupOpen: boolean
  setIsSignupOpen: (props: boolean) => void
  isContentFormOpen: boolean
  setIsContentFormOpen: (props: boolean) => void
  isCommentOpen: string
  setIsCommentOpen: (props: string) => void
}

const useStore = create<GlobalStoreType>((set) => ({
  isLoginOpen: false,
  setIsLoginOpen: (props) => set({ isLoginOpen: props }),
  isSignupOpen: false,
  setIsSignupOpen: (props) => set({ isSignupOpen: props }),
  isContentFormOpen: false,
  setIsContentFormOpen: (props) => set({ isContentFormOpen: props }),
  isCommentOpen: '',
  setIsCommentOpen: (props) => set({ isCommentOpen: props }),
}))

export const isLoginOpen = (state: GlobalStoreType) => state.isLoginOpen
export const setIsLoginOpen = (state: GlobalStoreType) => state.setIsLoginOpen
export const isSignupOpen = (state: GlobalStoreType) => state.isSignupOpen
export const setIsSignupOpen = (state: GlobalStoreType) => state.setIsSignupOpen
export const isContentFormOpen = (state: GlobalStoreType) =>
  state.isContentFormOpen
export const setIsContentFormOpen = (state: GlobalStoreType) =>
  state.setIsContentFormOpen
export const isCommentOpen = (state: GlobalStoreType) => state.isCommentOpen
export const setIsCommentOpen = (state: GlobalStoreType) =>
  state.setIsCommentOpen

export default useStore
