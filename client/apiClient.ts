import request from 'superagent'
import { Welcome } from '../models/welcome.ts'
import { Pokemon } from '../models/pokemon.ts'
import { Affirmation } from '../models/affirmations.ts'
const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWelcome(): Promise<Welcome> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export async function getPokemon(): Promise<Pokemon> {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/150')
  
  return response.body
}

export async function getAffirmations(): Promise<Affirmation> {
  const response = await request.get(`/api/v1/affirmations`)

  return response.body
}
