import React from 'react'

function To_do() {

  return (
    <div className='bg-slate-500 p-3'>
      <input type='text' placeholder='Enter your todo' name='todo' className='rounded-l-sm border-none'/>
      <button type='submit' className='bg-green-500 rounded-r-sm'>Add</button>
    </div>
  )
}

export default To_do
