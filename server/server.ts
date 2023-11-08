import { join } from 'node:path'
import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
// import pokemon from './routes/pokemon.ts'
import welcome from './routes/welcome.ts'
import request from 'superagent'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

// server.use('/api/v1/pokemon', pokemon)
server.use('/api/v1/welcome', welcome)
server.get("/api/v1/affirmations", async (req, res) => {
  const response = await request.get(
    `https://www.affirmations.dev`
  )

  res.json(response.body) 
})


// if we needed to use a key //

// server.get('/api/v1/affirmations', async (req, res) => {
//   const response = await request
//     .get('https://api.themoviedb.org/3/trending/movie/day')
//     .set('Authorization', `Bearer ${process.env.MOVIEDB_API_TOKEN}`)
//   // console.log(response.body.results)
//   res.json(response.body.results)
// })
export default server
