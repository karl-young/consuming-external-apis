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
        <div className="container">
          <div className="pokemon">
            <Pokemon />
          </div>
          <div className="affirmations">
            <Affirmations />
          </div>
        </div>
      </body>
      <footer></footer>
    </>
  )
}

export default App
