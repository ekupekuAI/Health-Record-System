import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Sidebar = ({ role, isOpen, onClose }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const getNavigationItems = () => {
    switch (role) {
      case 'patient':
        return [
          { path: '/patient/dashboard', label: 'Dashboard', icon: 'fas fa-home' },
          { path: '/patient/profile', label: 'Profile', icon: 'fas fa-user' },
          { path: '/patient/medical-records', label: 'Medical Records', icon: 'fas fa-file-medical' },
          { path: '/patient/appointments', label: 'Appointments', icon: 'fas fa-calendar' },
          { path: '/appointments/book', label: 'Book Appointment', icon: 'fas fa-plus-circle' }
        ]
      case 'doctor':
        return [
          { path: '/doctor/dashboard', label: 'Dashboard', icon: 'fas fa-home' },
          { path: '/doctor/patients', label: 'Patients', icon: 'fas fa-users' },
          { path: '/appointments', label: 'Appointments', icon: 'fas fa-calendar' }
        ]
      case 'admin':
        return [
          { path: '/admin/dashboard', label: 'Dashboard', icon: 'fas fa-home' },
          { path: '/admin/users', label: 'User Management', icon: 'fas fa-users-cog' },
          { path: '/appointments', label: 'Appointments', icon: 'fas fa-calendar' }
        ]
      default:
        return []
    }
  }

  const navigationItems = getNavigationItems()

  const handleNavigation = (path) => {
    navigate(path)
    onClose()
  }

  const isActivePath = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <i className="fas fa-heartbeat"></i>
            Health Record System
          </div>
          <p className="sidebar-subtitle">{role?.charAt(0).toUpperCase() + role?.slice(1)} Portal</p>
        </div>
        
        <nav className="sidebar-nav">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-nav-item ${isActivePath(item.path) ? 'active' : ''}`}
              onClick={onClose}
              aria-current={isActivePath(item.path) ? 'page' : undefined}
            >
              <i className={`${item.icon} icon-inline`} aria-hidden="true"></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      
      <style>{`
        .sidebar-subtitle {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-top: 0.5rem;
        }
        
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: none;
        }
        
        @media (max-width: 768px) {
          .sidebar-overlay {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default Sidebar