import React from 'react'

function Ifelse({isloggedin}) {
  return (
    <div>
      {isloggedin ? <p>user already login</p> : <p>Login first</p>}
      <button>Click me</button>
    </div>
  )
}

export default Ifelse
