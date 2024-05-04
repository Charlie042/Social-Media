import React from 'react'
import './loginPage.scss'

export const LoginPage = () => {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello There!</h1>
          <p>Welcome to the Ginger social media, it is exactly what you want from a social media, Privacy and entertainment</p>
          <span> Don't you have an account</span>
          <button>Register</button>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
          <input type="text" placeholder='UserName' />
          <input type="Password" placeholder='Password' />
          <button>Login</button>
          </form>

        </div>
      </div>
    </div>
  )
}
