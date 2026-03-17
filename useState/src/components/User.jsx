import React from 'react'

function User(props) {
  return (
    <div>
      <h3>Price :{props.Price}</h3>
      <h3>Models :{props.Model}</h3>
      <h3>Location :{props.Location}</h3>
    </div>
  )
}

export default User
