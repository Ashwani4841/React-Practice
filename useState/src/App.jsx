import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome back Ashwani</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={()=>setCount(count-1)}>Sub</button>
      <button>Clear</button>
    </>
  )
}

export default App
