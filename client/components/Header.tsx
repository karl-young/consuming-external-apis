import { useEffect, useState } from 'react'
import { getWelcome } from '../apiClient.ts'

const Welcome = () => {
  

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
      <h1>{welcomeStatement} ⚡️</h1>
    )
}

export default Welcome