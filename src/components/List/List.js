import React from 'react';
import Contact from '../Contact/Contact'
import idGeneration from '../../idGeneration'
import './List.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function List(props) {

  const [modalActive, setModalActive] = useState(false)
  const dispatch = useDispatch
  const store = useSelector(store => store)

  const list = store.contacts
  // const list = [{ name: 'Alex', surname: 'Alexsss', phone: '89991112233' }, { name: 'Alex', surname: 'Alexsss', phone: '89991112233' }]
  return (
    <div>
      <section>
        <button onClick={()=> setModalActive(true) } className='btnAdd'><img className='imgAdd' src='./add.svg' alt='plus' /> Добавить контакт</button>
        <div>
          {list.map(el => <Contact key={idGeneration()} id={el.id} active={modalActive} setActive={setModalActive}/>)}
        </div>
      </section>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>

  );
}

export default List;
