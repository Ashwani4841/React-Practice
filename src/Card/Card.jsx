import React from 'react'

function Card({ location, country, name }) {
  return (
    <div className='bg-slate-800 rounded-md font-bold w-32 h-44 flex justify-center '>
      <h1 className='text-fuchsia-50 flex justify-center items-center'>Hii this side {name} from {country}</h1>
    <h2>Footer</h2>
    </div>
  )
}

export default Card
