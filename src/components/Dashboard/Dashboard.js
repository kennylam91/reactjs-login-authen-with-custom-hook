import React, { useReducer, useState } from 'react'
import CharacterMap from '../CharacterMap/CharacterMap';

export default function Dashboard() {
  const [textInput, setTextInput] = useState('');
  const [showResult, toggleShowResult] = useReducer(state => !state, false);
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Use memo to stop re-render child component</h3>
      <textarea rows="5" value={textInput} onChange={(event) => setTextInput(event.target.value)} />
      <br/>
      <button onClick={() => toggleShowResult()} >Show result</button>
      {showResult &&<CharacterMap textInput={textInput}/> }
    </div>
  )
}
