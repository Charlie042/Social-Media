import React from 'react'
import './registerPage.scss'

export const RegisterPage = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Ginger Social</h1>
          <p>Welcome to the Ginger social media, it is exactly what you want from a social media, Privacy and entertainment</p>
          <span> Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
          <input type="text" placeholder='UserName' />
          <input type="text" placeholder='email' />
          <input type="Password" placeholder='Password' />
          <input type="text" placeholder='Name' />
          <button>Register</button>
          </form>

        </div>
      </div>
    </div>
  )
}
