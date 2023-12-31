import { useEffect, useState } from 'react'
import { getPokemon } from '../apiClient.ts'
import { Pokemon as PokemonType } from '../../models/pokemon.ts'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null)

  async function fetchPokemon() {
    const pokemonData = await getPokemon()
    
    setPokemon(pokemonData)
  }

  useEffect(() => {
    try {
      fetchPokemon()
    } catch (err) {
      console.error(err)
    }
  }, [])

  if (pokemon === null) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className="pokemon">
        <h2>Pokemon!</h2>
        <h3>{pokemon?.name}</h3>
        <img src={pokemon?.sprites.front_default} alt="Alt Name" />
        <p>{pokemon?.moves[0].move.name}</p>
        <p>{pokemon?.stats[0].base_stat}</p>
      </div>
    </>
  )
}
