import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const AdminDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({})
  const [recentActivity, setRecentActivity] = useState([])
  const [loading, setLoading] = useState(true)

  // Data loaded from API for admin statistics and recent activity

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        const usersRes = await fetch('/api/users', { headers: { Authorization: `Bearer ${token}` } })
        const apptRes = await fetch('/api/appointments', { headers: { Authorization: `Bearer ${token}` } })
        const usersJson = await usersRes.json()
        const apptJson = await apptRes.json()
        const totalUsers = Array.isArray(usersJson.users) ? usersJson.users.length : 0
        const activeUsers = Array.isArray(usersJson.users) ? usersJson.users.filter(u => u.status !== 'inactive').length : totalUsers
        const totalPatients = Array.isArray(usersJson.users) ? usersJson.users.filter(u => u.role === 'patient').length : 0
        const totalDoctors = Array.isArray(usersJson.users) ? usersJson.users.filter(u => u.role === 'doctor').length : 0
        const totalAdmins = Array.isArray(usersJson.users) ? usersJson.users.filter(u => u.role === 'admin').length : 0
        const totalAppointments = Array.isArray(apptJson.appointments) ? apptJson.appointments.length : 0
        const pendingAppointments = Array.isArray(apptJson.appointments) ? apptJson.appointments.filter(a => a.status === 'pending').length : 0
        const completedAppointments = Array.isArray(apptJson.appointments) ? apptJson.appointments.filter(a => a.status === 'completed').length : 0
        setStats({ totalUsers, activeUsers, totalPatients, totalDoctors, totalAdmins, totalAppointments, pendingAppointments, completedAppointments })
        // recent activity: combine recent user creations and appointments
        const recent = []
        if (Array.isArray(usersJson.users)) {
          usersJson.users.slice(0,5).forEach(u => recent.push({ id: `u-${u._id}`, type: 'user_registered', user: u.name || u.email, role: u.role, timestamp: u.createdAt || '', description: 'User created' }))
        }
        if (Array.isArray(apptJson.appointments)) {
          apptJson.appointments.slice(0,5).forEach(a => recent.push({ id: `a-${a._id}`, type: 'appointment_booked', user: a.patient_id, role: 'patient', timestamp: a.datetime || '', description: 'Appointment record' }))
        }
        setRecentActivity(recent.slice(0,8))
      } catch (e) {
        console.error('Failed to fetch admin dashboard data', e)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const getActivityIcon = (type) => {
    switch (type) {
      case 'user_registered':
        return 'fas fa-user-plus'
      case 'appointment_booked':
        return 'fas fa-calendar-plus'
      case 'prescription_created':
        return 'fas fa-prescription'
      case 'user_updated':
        return 'fas fa-user-edit'
      case 'appointment_completed':
        return 'fas fa-check-circle'
      default:
        return 'fas fa-info-circle'
    }
  }

  const getActivityColor = (type) => {
    switch (type) {
      case 'user_registered':
        return '#10b981'
      case 'appointment_booked':
        return '#3b82f6'
      case 'prescription_created':
        return '#8b5cf6'
      case 'user_updated':
        return '#f59e0b'
      case 'appointment_completed':
        return '#10b981'
      default:
        return '#6b7280'
    }
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now - date) / (1000 * 60 * 60)
    
    if (diffInHours < 1) {
      return 'Just now'
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)} hours ago`
    } else {
      return `${Math.floor(diffInHours / 24)} days ago`
    }
  }

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-header">
          <div className="admin-avatar-large">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="welcome-content">
            <h1 className="welcome-title">
              Welcome back, Administrator {user.lastName}!
            </h1>
            <p className="welcome-subtitle">
              System overview and management dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.totalUsers}</h3>
            <p className="stat-label">Total Users</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-user-check"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.activeUsers}</h3>
            <p className="stat-label">Active Users</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-user-injured"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.totalPatients}</h3>
            <p className="stat-label">Total Patients</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-user-md"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.totalDoctors}</h3>
            <p className="stat-label">Total Doctors</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.totalAdmins}</h3>
            <p className="stat-label">Total Admins</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{stats.totalAppointments}</h3>
            <p className="stat-label">Total Appointments</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Recent Activity */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <i className="fas fa-history"></i>
              Recent Activity
            </h2>
          </div>
          
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon" style={{ color: getActivityColor(activity.type) }}>
                  <i className={getActivityIcon(activity.type)}></i>
                </div>
                <div className="activity-content">
                  <div className="activity-header">
                    <span className="activity-user">{activity.user}</span>
                    <span className="activity-role badge badge-info">
                      {activity.role}
                    </span>
                  </div>
                  <p className="activity-description">{activity.description}</p>
                  <span className="activity-time">{formatTime(activity.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <i className="fas fa-server"></i>
              System Status
            </h2>
          </div>
          
          <div className="system-status">
            <div className="status-item">
              <div className="status-indicator online"></div>
              <div className="status-info">
                <span className="status-label">Database</span>
                <span className="status-value">Online</span>
              </div>
            </div>
            
            <div className="status-item">
              <div className="status-indicator online"></div>
              <div className="status-info">
                <span className="status-label">API Server</span>
                <span className="status-value">Online</span>
              </div>
            </div>
            
            <div className="status-item">
              <div className="status-indicator warning"></div>
              <div className="status-info">
                <span className="status-label">Email Service</span>
                <span className="status-value">Slow Response</span>
              </div>
            </div>
            
            <div className="status-item">
              <div className="status-indicator online"></div>
              <div className="status-info">
                <span className="status-label">Backup System</span>
                <span className="status-value">Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3 className="section-title">Quick Actions</h3>
        <div className="actions-grid">
          <a href="/admin/users" className="action-card">
            <div className="action-icon">
              <i className="fas fa-users-cog"></i>
            </div>
            <div className="action-content">
              <h4>User Management</h4>
              <p>Add, edit, or remove users</p>
            </div>
          </a>
          
          <a href="/appointments" className="action-card">
            <div className="action-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="action-content">
              <h4>Appointments</h4>
              <p>View and manage appointments</p>
            </div>
          </a>
          
          <a href="/admin/reports" className="action-card">
            <div className="action-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="action-content">
              <h4>System Reports</h4>
              <p>Generate and view reports</p>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .admin-dashboard {
          animation: fadeIn 0.5s ease-in;
        }
        
        .welcome-section {
          background: linear-gradient(135deg, var(--secondary-purple), #7c3aed);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          margin-bottom: var(--spacing-8);
          color: var(--white);
        }
        
        .welcome-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .admin-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          color: var(--white);
        }
        
        .welcome-content {
          flex: 1;
        }
        
        .welcome-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .welcome-subtitle {
          font-size: var(--font-size-lg);
          opacity: 0.9;
          margin: 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-8);
        }
        
        .stat-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          box-shadow: var(--shadow-md);
          transition: transform 0.2s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--secondary-purple);
        }
        
        .stat-number {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .stat-label {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
        }
        
        .dashboard-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .card-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
        }
        
        .card-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .activity-list {
          padding: var(--spacing-4);
        }
        
        .activity-item {
          display: flex;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-bottom: 1px solid var(--gray-100);
          transition: background-color 0.2s ease;
        }
        
        .activity-item:hover {
          background-color: var(--gray-50);
        }
        
        .activity-item:last-child {
          border-bottom: none;
        }
        
        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .activity-content {
          flex: 1;
          min-width: 0;
        }
        
        .activity-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-1);
        }
        
        .activity-user {
          font-weight: 600;
          color: var(--gray-800);
        }
        
        .activity-role {
          font-size: var(--font-size-xs);
        }
        
        .activity-description {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .activity-time {
          color: var(--gray-400);
          font-size: var(--font-size-xs);
        }
        
        .system-status {
          padding: var(--spacing-4);
        }
        
        .status-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-bottom: 1px solid var(--gray-100);
        }
        
        .status-item:last-child {
          border-bottom: none;
        }
        
        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .status-indicator.online {
          background-color: var(--status-success);
        }
        
        .status-indicator.warning {
          background-color: var(--status-warning);
        }
        
        .status-indicator.offline {
          background-color: var(--status-error);
        }
        
        .status-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .status-label {
          font-weight: 500;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
        }
        
        .status-value {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
        }
        
        .quick-actions {
          margin-bottom: var(--spacing-8);
        }
        
        .section-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-4) 0;
        }
        
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-4);
        }
        
        .action-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }
        
        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .action-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--secondary-purple);
          flex-shrink: 0;
        }
        
        .action-content h4 {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .action-content p {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .welcome-header {
            flex-direction: column;
            text-align: center;
          }
          
          .welcome-title {
            font-size: var(--font-size-2xl);
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .activity-item {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default AdminDashboard