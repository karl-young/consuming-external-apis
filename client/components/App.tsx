import Pokemon from './Pokemon.tsx'
import Affirmations from './Affirmations.tsx'
import Welcome from './Header.tsx'

function App() {
 
  return (
    <>
    <header>
      <Welcome />
    </header>
    <body>
    <div>
      <Pokemon />
      </div>
      <div>
      <Affirmations />
      </div>
      </body>
      <footer></footer>
    </>
  )
}

export default App
