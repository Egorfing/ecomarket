import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delContactAC } from '../../redux/actionCreators'
import ModalEdit from '../ModalEdit/ModalEdit';
import './Contact.css'

function Contact({id, active, setActive }) {

  const dispatch = useDispatch()
  const [modalActive1, setModalActive1] = useState(false)

 
  const store = useSelector(store => store)
  const [person] = store.contacts.filter(el=>el.id===id)

  function delHandler(){
dispatch(delContactAC(id))
  }
  return (
    <div>
      <div className='contact'>
      <div className='icon'>
        <img src='./icon.svg' alt='person' />
      </div>
      <div className='name'>{person.surname + " " +person.name }</div>
      <div className='phone'>{person.phone}</div>
      <img onClick={()=>setModalActive1(true)} className='editimg' src='./edit.svg' alt='edit' />
      <img onClick={delHandler} className='bascetimg' src='./bascet.svg' alt='del' />
    </div>
    <ModalEdit active1={modalActive1} setActive1={setModalActive1} id={id}/>
    </div>
    
  );
}

export default Contact;
