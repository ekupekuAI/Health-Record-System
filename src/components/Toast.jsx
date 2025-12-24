import React, { useEffect, useState } from 'react'

const Toast = () => {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handler = (e) => {
      const id = Date.now() + Math.random()
      const { type, message, duration } = e.detail
      setToasts((t) => [...t, { id, type, message }])
      setTimeout(() => {
        setToasts((t) => t.filter(x => x.id !== id))
      }, duration || 4000)
    }

    window.addEventListener('show-toast', handler)
    return () => window.removeEventListener('show-toast', handler)
  }, [])

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type}`} role="status">
          <div className="toast-message">{t.message}</div>
        </div>
      ))}

      <style>{`
        .toast-container {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 99999;
        }

        .toast {
          min-width: 220px;
          max-width: 360px;
          padding: 12px 16px;
          border-radius: 10px;
          box-shadow: var(--shadow-lg);
          color: var(--white);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          transform-origin: right bottom;
          animation: toastIn 220ms ease;
        }

        .toast-info { background: linear-gradient(90deg, var(--primary-blue), var(--primary-blue-dark)); }
        .toast-success { background: linear-gradient(90deg, var(--status-success), #059669); }
        .toast-error { background: linear-gradient(90deg, var(--status-error), #c0262a); }
        .toast-warning { background: linear-gradient(90deg, var(--status-warning), #b45309); }

        .toast-message { font-size: var(--font-size-sm); }

        @keyframes toastIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}

export default Toast
