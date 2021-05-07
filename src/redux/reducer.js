import { INIT_CONTACTS, ADD_CONTACT, DEL_CONTACT, EDIT_CONTACT } from './actionTypes'

const initialState = { auth: false, contacts: [{id:'001', name: 'Иван', surname: 'Иванов', phone: '89321323211' }] }

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_CONTACTS:
      return { ...state, contacts: action.payload }

    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] }

    case DEL_CONTACT:
      return { ...state, contacts: [...state.contacts].filter(el => el.id !== action.payload) }

    case EDIT_CONTACT:
      return { ...state, contacts: [...state.contacts].filter(el => el.id === action.payload.id ? el=action.payload : el) }

    default:
      return state
  }
}

export default reducer
