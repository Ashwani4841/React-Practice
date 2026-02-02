import React from 'react'
import Card from './Card/Card'
// import EventHandling from './eventHandling/EventHandling'
// import InputHandling from './eventHandling/inputHandling'
// import FormHandling from './eventHandling/FormHandling'
import Ifelse from './conRendering/Ifelse'
import Listsandkeys from './listsKey/Listsandkeys'
import LoginForm from './loginForm/LoginForm'
import To_do from './todo/To_do'

export default function App() {
  return (
    <div>
      {/* <Card country="india" location="manali" name="Shivam"/> */}
      {/* <Card country="UK" location="manali" name="Himanshu"/> */}
      {/* <EventHandling/>
      <InputHandling/> */}
      {/* <FormHandling/> */}
      {/* <Ifelse/> */}
      {/* <Listsandkeys/> */}
      {/* <h2 className='bg-slate-900 text-pink-300'>Welcome to my website</h2> */}
      {/* <LoginForm/> */}
      <To_do/>
    </div>
  )
}
