export const openMenu = () => ({ type: 'MENU_OPEN' })
export const closeMenu = () => ({ type: 'MENU_CLOSE' })

const initialState = {
  menuOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_OPEN': return { ...state, menuOpen: true }
    case 'MENU_CLOSE': return { ...state, menuOpen: false }
    default: return state
  }
}
