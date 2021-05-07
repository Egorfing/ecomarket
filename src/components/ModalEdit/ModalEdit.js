import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContactAC } from '../../redux/actionCreators'
import './ModalEdit.css'

function ModalEdit({ active1, setActive1, id }) {

  // console.log(name, surname, phone);
  const dispatch = useDispatch()
  const inputName = useRef()
  const inputSurname = useRef()
  const inputPhone = useRef()
  const store = useSelector(store => store)
  const [person] = store.contacts.filter(el => el.id === id)
  console.log(person);

  function formHandler(e) {
    e.preventDefault()
    person.name = inputName.current.value
    person.surname = inputSurname.current.value
    person.phone = inputPhone.current.value
dispatch(editContactAC(person))
  }

  return (
    <div className={active1 ? 'modal1 active1' : 'modal1'} onClick={() => setActive1(false)}>
      <form onClick={e => e.stopPropagation()} onSubmit={formHandler} className='modalForm'>
        <div className='modalLable'>Изменить контакт</div>
        <input ref={inputName} name='name' className='modalInput' defaultValue={person.name} placeholder='Имя' required />
        <input ref={inputSurname} name='surname' className='modalInput' defaultValue={person.surname} placeholder='Фамилия' required />
        <input ref={inputPhone} name='phone' className='modalInput' defaultValue={person.phone} placeholder='Телефон' required />
        <div className='btnBlock'>
          <button onClick={() => setActive1(false)} className='btnModal cancel' type='button'>Отменить</button>
          <button className='btnModal' type='submit'>Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default ModalEdit;
