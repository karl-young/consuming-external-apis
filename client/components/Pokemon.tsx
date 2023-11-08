import { useEffect, useState } from 'react'
import { getPokemon } from '../apiClient.ts'
import { Pokemon as PokemonType } from '../../models/pokemon.ts'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null)

  async function fetchPokemon() {
    const pokemonData = await getPokemon()
    // has double url?
    // console.log(pokemonData.sprites.front_default + ' img')
    // console.log(pokemonData.sprites)

    setPokemon(pokemonData)
  }

  useEffect(() => {
    try {
      fetchPokemon()
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <>
      <h2>Pokemon!</h2>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>{pokemon?.sprites.front_default}</p>
      <p>{pokemon?.name}</p>
    </>
  )
}
