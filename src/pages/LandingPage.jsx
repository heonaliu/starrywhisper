import { Link } from 'react-router-dom'
import Galaxy from '@/components/Galaxy'

export default function LandingPage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000' }}>
        
      <div style={{ position: 'absolute', inset: 0 }}>
        <Galaxy
          starSpeed={0.1}
          rotationSpeed={0}
          speed={0.4}
          hueShift={140}
          density={1}
          glowIntensity={0.3}
          twinkleIntensity={0.3}
          mouseRepulsion={false}
          transparent={false}
        />
      </div>

      {/* Content on top */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        color: 'white',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '0.3em' }}>
          Starwhisper
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', fontSize: '0.85rem' }}>
          cast your dream into the dark
        </p>
        <Link to="/universe">
          <button style={{
            marginTop: '1.5rem',
            padding: '0.7rem 2rem',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '9999px',
            background: 'transparent',
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            cursor: 'pointer',
          }}>
            Enter the universe
          </button>
        </Link>
      </div>

    </div>
  )
}