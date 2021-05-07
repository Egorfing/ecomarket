import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {

  function logoutHandler(){
    localStorage.removeItem('login')
  }
  return (
    <div className='header'>
      <Link className='link' to='/'>
        <img src='./contacts.svg' alt='contacts'/>
        <div className='lable'>Контакты</div>
      </Link>
      <Link onClick={logoutHandler} className='link' to='/login'>
        <div className='lable exit'>Выход</div>
        <img src='./exit.svg' alt='exit'/>
      </Link>
    </div>
  );
}

export default Nav;
