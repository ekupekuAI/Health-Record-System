import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Unauthorized = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleGoBack = () => {
    if (user) {
      // Redirect to appropriate dashboard based on role
      switch (user.role) {
        case 'patient':
          navigate('/patient/dashboard')
          break
        case 'doctor':
          navigate('/doctor/dashboard')
          break
        case 'admin':
          navigate('/admin/dashboard')
          break
        default:
          navigate('/login')
      }
    } else {
      navigate('/login')
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-card">
        <div className="unauthorized-icon">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        
        <h1 className="unauthorized-title">Access Denied</h1>
        <p className="unauthorized-message">
          You don't have permission to access this page. 
          {user && (
            <>
              <br />
              <span className="user-info">
                Current role: <strong>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</strong>
              </span>
            </>
          )}
        </p>
        
        <div className="unauthorized-actions">
          <button 
            className="btn btn-primary"
            onClick={handleGoBack}
          >
            <i className="fas fa-arrow-left"></i>
            Go to Dashboard
          </button>
          
          {user && (
            <button 
              className="btn btn-outline"
              onClick={handleLogout}
            >
              <i className="fas fa-sign-out-alt"></i>
              Sign Out
            </button>
          )}
        </div>
      </div>
      
      <style>{`
        .unauthorized-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: var(--spacing-4);
        }
        
        .unauthorized-card {
          background: var(--white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          padding: var(--spacing-12);
          text-align: center;
          max-width: 500px;
          width: 100%;
          animation: fadeIn 0.5s ease-in;
        }
        
        .unauthorized-icon {
          font-size: var(--font-size-4xl);
          color: var(--status-warning);
          margin-bottom: var(--spacing-6);
        }
        
        .unauthorized-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin-bottom: var(--spacing-4);
        }
        
        .unauthorized-message {
          color: var(--gray-600);
          font-size: var(--font-size-base);
          margin-bottom: var(--spacing-8);
          line-height: 1.6;
        }
        
        .user-info {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
        }
        
        .unauthorized-actions {
          display: flex;
          gap: var(--spacing-3);
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .unauthorized-card {
            padding: var(--spacing-8);
            margin: var(--spacing-2);
          }
          
          .unauthorized-title {
            font-size: var(--font-size-2xl);
          }
          
          .unauthorized-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Unauthorized