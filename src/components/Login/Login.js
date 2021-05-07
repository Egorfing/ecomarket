import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'

function Login(props) {
  const history = useHistory()

  function formHandler(e) {
    e.preventDefault()
    const { email, password } = e.target
    if (email.value === 'admin@log.ru' && password.value === '1234') {
      localStorage.setItem('login', true)
      history.push('/')
    }
  }

  return (
    <section className='pageLogin'>
      <form onSubmit={formHandler} className='form'>
        <img className='loginsvg' src='./login.svg' alt='login'/>
        <input name='email' type='email' placeholder='Email' required />
        <input name='password' type='password' placeholder='Пароль' required />
        <button className='btnlogin'>Войти</button>
      </form>
    </section>

  );
}

export default Login;
