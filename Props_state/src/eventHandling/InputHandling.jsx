import React, { useState } from 'react'

function InputHandling() {

    const [input, setIntput] = useState("")
  return (
    <div>
      <input
        type='text'
        placeholder='enter your name'
        onChange={(e)=>setIntput(e.target.value)}
      />

      <h1>hello, {input}</h1>
    </div>
  )
}

export default InputHandling
