import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <h1>🎮 Toddler Game Worksheet</h1>
          <p>Learn, Play, and Have Fun!</p>
        </header>
        
        <main className="app-main">
          <div className="button-grid">
            <button className="game-button color-matching">🎨 Color Matching</button>
            <button className="game-button shape-recognition">🔷 Shape Recognition</button>
            <button className="game-button number-counting">🔢 Number Counting</button>
            <button className="game-button animal-sounds">🐾 Animal Sounds</button>
          </div>
        </main>

        <footer className="app-footer">
          <p>Made with ❤️ for toddlers and their families</p>
        </footer>
      </div>
    </>
  )
}

export default App
