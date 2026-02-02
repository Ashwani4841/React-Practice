import React from 'react'

function LoginForm() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <form className='w-72 h-72 bg-slate-700 flex justify-center items-center flex-col rounded-md'>
        <h1 className='pt-1 text-xl'>Login User</h1>
        <label className='flex text-yellow-50 '>Email:</label>
        <input type='text' placeholder='Enter your email'></input>
        <label>Password:</label>
        <input type='password' placeholder='Enter your password'></input>
        <button>Login</button>
      </form>
    </div>
    </>
  )
}

export default LoginForm
