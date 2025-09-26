import { useState } from 'react'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import './styles/global.css'

function App() {
  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 고양이 🐱</h1>
        <p>귀여운 고양이가 춤을 춰요!</p>
      </header>

      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls
          isAnimating={isAnimating}
          onToggle={() => setIsAnimating(!isAnimating)}
        />
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ and React</p>
      </footer>
    </div>
  )
}

export default App
