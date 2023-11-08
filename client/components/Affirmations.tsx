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
      <p>{affirmation?.affirmation}</p>
    </>
  )
}
