import React from 'react'

function Login({user}) {
  return (
    <div>
      <h2>Welcome back</h2>
      <h2>{user}, this is the best place where you can learn code.</h2>
      <button onClick={()=>Login}>login</button>
    </div>
  )
}

export default Login
