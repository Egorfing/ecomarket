import { INIT_CONTACTS, ADD_CONTACT, DEL_CONTACT, EDIT_CONTACT } from './actionTypes'

export const initContactsAC = (payload) => {
  return {
    type: INIT_CONTACTS,
    payload: payload
  }
}

export const addContactAC = (payload) => {
  return {
    type: ADD_CONTACT,
    payload: payload
  }
}

export const delContactAC = (payload) => {
  return {
    type: DEL_CONTACT,
    payload: payload
  }
}

export const editContactAC = (payload) => {
  return {
    type: EDIT_CONTACT,
    payload: payload
  }
}
