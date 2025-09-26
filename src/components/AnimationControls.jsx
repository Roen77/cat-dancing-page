import '../styles/controls.css'

const AnimationControls = ({ isAnimating, onToggle }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="animation-controls">
      <button
        className={`control-button ${isAnimating ? 'pause' : 'play'}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
        tabIndex={0}
      >
        <span className="button-icon">
          {isAnimating ? '⏸️' : '▶️'}
        </span>
        <span className="button-text">
          {isAnimating ? '댄스 멈춤' : '댄스 시작'}
        </span>
      </button>

      <div className="status-indicator">
        <div className={`status-light ${isAnimating ? 'active' : 'inactive'}`}></div>
        <span className="status-text">
          {isAnimating ? '댄싱 중...' : '대기 중'}
        </span>
      </div>

      <div className="dance-info">
        <p>🎵 5가지 댄스 동작:</p>
        <div className="dance-types">
          <span className="dance-type">바운스</span>
          <span className="dance-type">흔들기</span>
          <span className="dance-type">회전</span>
          <span className="dance-type">진동</span>
          <span className="dance-type">점프</span>
        </div>
      </div>
    </div>
  )
}

export default AnimationControls