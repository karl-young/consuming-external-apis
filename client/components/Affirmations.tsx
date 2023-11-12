import { useState, useEffect } from 'react'
import { Affirmation } from '../../models/affirmations.ts'
import { getAffirmations } from '../apiClient.ts'

export default function Affirmations() {
  const [affirmation, setAffirmation] = useState<Affirmation | null>(null)

  async function fetchAffirmation() {
    const affirmation = await getAffirmations()
    setAffirmation(affirmation)
  }

  useEffect(() => {
    try {
      fetchAffirmation()
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <>
      <div className="affirmation">
        <h1>Affirmations:</h1>
        <h2>{affirmation?.affirmation}</h2>
      </div>
    </>
  )
}
