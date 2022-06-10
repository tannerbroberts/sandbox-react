import React, { useState } from 'react';

export default function App() {

  const [login, setLogin] = useState("")
  const [query, setQuery] = useState("")

  return (
    <>
      <input
      type="text"
      value={login}
      onChange= {(event)=> setLogin(event.target.value)}
      placeholder="Github login" />
      <button onClick= {()=> {setQuery(login)} } >Search</button>

    <LinkedinLoginApiViewer login={query} />
    </>
  )
}