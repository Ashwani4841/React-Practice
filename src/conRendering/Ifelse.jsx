import React from 'react'

function Ifelse({isloggedin}) {
  return (
    <div>
      {isloggedin ? <p>user already login</p> : <p>Login first</p>}
    </div>
  )
}

export default Ifelse
