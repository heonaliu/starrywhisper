import { useEffect } from 'react'

export default function StarBornTransition({ onComplete }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.()
    }, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <>
      <style>{`
        @keyframes starPop {
          0%   { transform: scale(0);   opacity: 0; }
          60%  { transform: scale(1.4); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes ringOut {
          0%   { transform: scale(1);  opacity: 0.7; }
          100% { transform: scale(10); opacity: 0;   }
        }
        @keyframes textIn {
          0%   { opacity: 0; letter-spacing: 0.6em; }
          100% { opacity: 1; letter-spacing: 0.35em; }
        }
        @keyframes overlayOut {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
        .sb-overlay {
          animation: overlayOut 0.6s ease forwards 2.2s;
        }
        .sb-star {
          animation: starPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.2s;
          opacity: 0;
        }
        .sb-ring {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.5);
          animation: ringOut 1.6s ease-out forwards;
        }
        .sb-ring-1 { animation-delay: 0.3s; }
        .sb-ring-2 { animation-delay: 0.6s; border-color: rgba(255,255,255,0.25); }
        .sb-ring-3 { animation-delay: 0.9s; border-color: rgba(255,255,255,0.12); }
        .sb-text {
          animation: textIn 1s ease forwards 0.9s;
          opacity: 0;
        }
      `}</style>

      <div className="sb-overlay absolute inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8">

        <div style={{ position: 'relative', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="sb-ring sb-ring-1" />
          <div className="sb-ring sb-ring-2" />
          <div className="sb-ring sb-ring-3" />
          <div
            className="sb-star"
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: 'white',
              boxShadow: '0 0 6px 2px rgba(255,255,255,0.6)',
              position: 'relative',
              zIndex: 1000,
            }}
          />
        </div>

        <p className="sb-text text-white/50 text-xs" style={{ letterSpacing: '0.35em' }}>
          a star is born...
        </p>

      </div>
    </>
  )
}