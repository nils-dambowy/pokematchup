
import './App.css'
import Pokemons from './components/Pokemons'
import SearchField from './components/SearchField'

function App() {

  return (
    <>
      <h1 id="title">
        PokéMatchup
      </h1>
      <SearchField />
      <Pokemons />
    </>
  )
}

export default App
