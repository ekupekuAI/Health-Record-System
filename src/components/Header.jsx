import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ user, onLogout, onMenuClick }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button btn btn-outline" onClick={onMenuClick} aria-label="Open menu">
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
        <div className="breadcrumb">
          <h1 className="page-title">Health Record System</h1>
        </div>
      </div>
      
      <div className="header-right">
        <div className="user-info">
          <div className="user-avatar">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="user-details">
            <span className="user-name">
              {user?.firstName} {user?.lastName}
            </span>
            <span className="user-role">
              {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
            </span>
          </div>
        </div>
        
        <button className="logout-button btn btn-danger" onClick={handleLogout} aria-label="Logout">
          <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
          <span style={{marginLeft: '8px'}}>Logout</span>
        </button>
      </div>
      
      <style>{`
        .header {
          background: var(--white);
          border-bottom: 1px solid var(--gray-200);
          padding: var(--spacing-4) var(--spacing-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .menu-button {
          background: none;
          border: none;
          font-size: var(--font-size-xl);
          color: var(--gray-600);
          cursor: pointer;
          padding: var(--spacing-2);
          border-radius: var(--radius-md);
          display: none;
        }
        
        .menu-button:hover {
          background-color: var(--gray-100);
        }
        
        .page-title {
          font-size: var(--font-size-2xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .user-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-2) var(--spacing-4);
          border-radius: var(--radius-md);
          background-color: var(--gray-50);
        }
        
        .user-avatar {
          font-size: var(--font-size-2xl);
          color: var(--primary-blue);
        }
        
        .user-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .user-name {
          font-weight: 600;
          color: var(--gray-800);
          font-size: var(--font-size-sm);
        }
        
        .user-role {
          font-size: var(--font-size-xs);
          color: var(--gray-500);
          text-transform: capitalize;
        }
        
        .logout-button {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-2) var(--spacing-4);
          background: var(--status-error);
          color: var(--white);
          border: none;
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .logout-button:hover {
          background: #dc2626;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .header {
            padding: var(--spacing-3) var(--spacing-4);
          }
          
          .menu-button {
            display: block;
          }
          
          .page-title {
            font-size: var(--font-size-xl);
          }
          
          .user-details {
            display: none;
          }
          
          .logout-button {
            padding: var(--spacing-2);
            font-size: var(--font-size-xs);
          }
          
          .logout-button span {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header