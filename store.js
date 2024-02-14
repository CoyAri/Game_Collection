import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => sessionStorage)

export const hideAtom = atomWithStorage('backButton', 'hidden', storage)