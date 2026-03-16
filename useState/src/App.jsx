import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

  return (
    <>
      <h1>Welcome back Ashwani</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={()=>setCount(count-1)}>Sub</button>
      <button onClick={()=>setCount(count-count)}>Clear</button>

      <input onChange={()=>setData(e.event.value)}></input>
      <h2>Value is : {data}</h2>
    </>
  )
}

export default App
