import React, { useState } from 'react'
import '../App.css'


const Register = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const handleSubmit
  return (
    <div className='sign-up-container'>
      <h2> Signup</h2>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <label> Username:
          <input type='text' name='username'
          onChange={(e)=> setUsername(e.target.value)}
          />

        </label>
        <label> Password:
          <input type='text' name='password'
            onChange={(e)=> setPassword(e.target.value)}
          />
        </label>
        <input type='text' value='Email'
          onChange={(e)=> setEmail(e.target.value)}
        />
        </form>
     </div>
  )
}

export default Register;