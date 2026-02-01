import React, { useState } from 'react'

function EventHandling() {

    const [data, setData] = useState("")
    function handleEvent(){
        alert("laad chatbe bhske..")
    }
  return (
    <div>
      <button onClick={handleEvent} className='bg-gray-900 text-slate-200'>Click here</button>
    </div>
  )
}

export default EventHandling
