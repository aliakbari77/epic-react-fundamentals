// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInput = useRef()
  const [username, setUsername] = useState('')
  
  function handleChange (event){
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  function handleSubmit (event){
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input value={username} ref={usernameInput} type="text" id='usernameInput' onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
