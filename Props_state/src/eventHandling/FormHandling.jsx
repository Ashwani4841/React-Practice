import React, { useState } from 'react'

function FormHandling() {

    const [input, setIntput] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        alert("form submitted succesfully")
        e.preventDefault();
        setIntput(" ")
        setEmail(" ")
        setPassword(" ")
    }

    return (
        <div className='border-slate-900'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='enter your name'
                    value={input}
                    onChange={(e)=>setIntput(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='enter your password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default FormHandling
