import React, { useState } from 'react'

export default function Dashboard() {
  const [textInput, setTextInput] = useState();
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Use memo to stop re-render child component</h3>
      <textarea rows="5" value={textInput} onChange={(event) => setTextInput(event.target.value)} />
      
    </div>
  )
}
