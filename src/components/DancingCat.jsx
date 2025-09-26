import { useState, useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

const DancingCat = ({ isAnimating }) => {
  const [currentDance, setCurrentDance] = useState('bounce')

  const danceTypes = ['bounce', 'wiggle', 'spin', 'shake', 'jump']

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      const randomDance = danceTypes[Math.floor(Math.random() * danceTypes.length)]
      setCurrentDance(randomDance)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div
        className={`dancing-cat ${isAnimating ? currentDance : ''}`}
        role="img"
        aria-label="댄싱 고양이"
      >
        <img
          src={catSvg}
          alt="귀여운 고양이"
          className="cat-image"
        />
      </div>

      {isAnimating && (
        <div className="dance-effects">
          <div className="sparkle sparkle-1">✨</div>
          <div className="sparkle sparkle-2">⭐</div>
          <div className="sparkle sparkle-3">💫</div>
          <div className="sparkle sparkle-4">🌟</div>
        </div>
      )}

      <div className="stage-floor"></div>
    </div>
  )
}

export default DancingCat