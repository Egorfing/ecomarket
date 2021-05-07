import React, { useRef } from 'react';
import { addContactAC } from '../../redux/actionCreators'
import { useDispatch } from 'react-redux';
import idGeneration from '../../idGeneration'
import './Modal.css'

function Modal({ active, setActive }) {

  const dispatch = useDispatch()

  const inputName = useRef()
  const inputSurname = useRef()
  const inputPhone = useRef()

  function formHandler(e) {
    e.preventDefault()
    const person = {
      id: idGeneration(),
      name: inputName.current.value,
      surname: inputSurname.current.value,
      phone: inputPhone.current.value
    }
    console.log(person);
    dispatch(addContactAC(person))
    inputName.current.value=''
    inputSurname.current.value=''
    inputPhone.current.value=''
    setActive(false)
  }
  function cancelHandler(){
    inputName.current.value=''
    inputSurname.current.value=''
    inputPhone.current.value=''
    setActive(false)
  }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <form onClick={e => e.stopPropagation()} onSubmit={formHandler} className='modalForm'>
        <div className='modalLable'>Добавить контакт</div>
        <input ref={inputName} name='name' className='modalInput' placeholder='Имя' required/>
        <input ref={inputSurname} name='surname' className='modalInput' placeholder='Фамилия' required/>
        <input ref={inputPhone} name='phone' className='modalInput' placeholder='Телефон' required/>
        <div className='btnBlock'>
          <button onClick={cancelHandler} className='btnModal cancel' type='button'>Отменить</button>
          <button className='btnModal' type='submit'>Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
