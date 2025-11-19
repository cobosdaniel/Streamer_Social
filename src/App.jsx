import { useState } from 'react'
import './App.css'
import Messsage from './Message'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const appClassName = isDarkMode ? 'app app-dark' : 'app app-light'

  const [animeList, setAnimeList] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    genre: '',
  })

  function handleChange(e){
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e){
    e.preventDefault()

    if(!formData.name.trim()) return

    const newAnime = {
      id: Date.now(),
      name: formData.name.trim(),
      genre: formData.genre.trim(),
    }

    setAnimeList((prev) => [...prev, newAnime])

    setFormData({
      name: '',
      genre: '',
    })

  }


  return (
    <div className={appClassName}>
      <button 
      className='darkMode-toggle'
      type='button'
      onClick={() => setIsDarkMode(prev => !prev)}
      >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <main>
        <h1>Anime Watch Queue</h1>

        {/* Form */}
        <div className='card'>
          <form onSubmit={handleSubmit} className='anime-form'>
            <div className='form-row'>
              <label>
                Anime Name
                <input
                  type = "text"
                  name = "name"
                  value = {formData.name}
                  onChange={handleChange}
                  placeholder= "e.g. Jujutsu Kaisen"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Genre
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  placeholder="e.g. Shounen, Slice of Life"
                />
              </label>
            </div>

            <button type="submit">Add Anime</button>

          </form>
        </div>

        {/* List */}
        <div className="card">
          <h2>My List</h2>
          {animeList.length === 0 ? (
            <p>No anime added yet. Start by adding one above!</p>
          ) : (
            <ul className="anime-list">
              {animeList.map(anime => (
                <li key={anime.id} className="anime-item">
                  <strong>{anime.name}</strong>
                  {anime.genre && <> • {anime.genre}</>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
