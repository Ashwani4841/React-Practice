import React from 'react'

function Listsandkeys() {

    const data = [
        {id:1, name: "iphone 15", price: "15,999"},
        {id:2, name: "Vivo 23e", price: "25,999"},
        {id:3, name: "Moto 11A", price: "35,999"},
    ]

  return (
    <div>
        <ul>
            {data.map((newData)=>(
        <li key={newData.id}>{newData.name}</li>
      ))}
        </ul>
      <p>Welcome back, Ashwani</p>
    </div>
  )
}

export default Listsandkeys
