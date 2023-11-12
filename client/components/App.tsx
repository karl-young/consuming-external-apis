import { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient.ts'
import Pokemon from './Pokemon.tsx'
import Affirmations from './Affirmations.tsx'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement} ⚡️</h1>
      <Pokemon />
      <Affirmations />
    </>
  )
}

export default App
