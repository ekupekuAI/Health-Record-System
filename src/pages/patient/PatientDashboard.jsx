import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const PatientDashboard = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [medicalRecords, setMedicalRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeMedicationsCount, setActiveMedicationsCount] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        // fetch appointments for current user
        const apptsRes = await fetch('/api/appointments', { headers: { Authorization: `Bearer ${token}` } })
        const apptsData = await apptsRes.json()
        let mappedAppts = []
        if (apptsRes.ok && Array.isArray(apptsData.appointments)) {
          // for each appointment, try to fetch doctor info to display name
          mappedAppts = await Promise.all(apptsData.appointments.map(async (a) => {
            let doctorName = a.doctor_id || 'Doctor'
            let specialization = ''
            try {
              const dres = await fetch(`/api/users/${a.doctor_id}`, { headers: { Authorization: `Bearer ${token}` } })
              if (dres.ok) {
                const djson = await dres.json()
                const du = djson.user
                const parts = (du.name || '').split(' ').filter(Boolean)
                doctorName = parts.join(' ') || doctorName
                specialization = du.profile?.specialization || ''
              }
            } catch (e) {}
            const dt = new Date(a.datetime)
            const date = isNaN(dt) ? a.datetime : dt.toISOString().split('T')[0]
            const time = isNaN(dt) ? '' : dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            return {
              id: a._id || a.id,
              doctor: doctorName,
              specialization,
              date,
              time,
              status: a.status,
              type: a.type || 'Consultation',
              location: a.location || '',
              notes: a.notes || ''
            }
          }))
        }

        // fetch medical records for user
        let records = []
        try {
          if (user?.id) {
            const rres = await fetch(`/api/records/patient/${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
            const rjson = await rres.json()
            if (rres.ok && Array.isArray(rjson.records)) {
              records = rjson.records.map(r => ({
                id: r._id,
                date: r.created_at || r.date || r.createdAt || '',
                doctor: r.doctor_name || r.doctor_id || r.doctor || '',
                type: r.type || 'Record',
                diagnosis: r.diagnosis || '',
                medications: r.prescription ? [r.prescription] : (r.medications || []),
                notes: r.notes || ''
              }))
            }
          }
        } catch (e) {}

        setAppointments(mappedAppts)
        setMedicalRecords(records)
        // derive active medications count from records
        const medsCount = records.reduce((acc, r) => {
          if (r.medications && Array.isArray(r.medications)) return acc + r.medications.length
          return acc
        }, 0)
        setActiveMedicationsCount(medsCount)
      } catch (e) {
        console.error('Failed to load dashboard data', e)
      }
      setLoading(false)
    }
    fetchData()
  }, [user])

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return <span className="badge badge-success">Approved</span>
      case 'pending':
        return <span className="badge badge-pending">Pending</span>
      case 'cancelled':
        return <span className="badge badge-cancelled">Cancelled</span>
      default:
        return <span className="badge badge-info">Scheduled</span>
    }
  }

  const safeFormat = (dateStr) => {
    if (!dateStr) return ''
    try {
      const d = new Date(dateStr)
      if (isNaN(d)) return dateStr
      return format(d, 'MMM dd, yyyy')
    } catch {
      return dateStr
    }
  }

  const getInitials = (name = '') => {
    return name
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="patient-dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-header">
          <div className="user-avatar-large">
            <span className="avatar-initials">
              {getInitials(`${user?.firstName ?? ''} ${user?.lastName ?? ''}`)}
            </span>
          </div>
          <div className="welcome-content">
            <h1 className="welcome-title">
              Welcome back, {user?.firstName ?? 'Guest'}!
            </h1>
            <p className="welcome-subtitle">
              Here's your health summary for today
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{appointments.length}</h3>
            <p className="stat-label">Upcoming Appointments</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-file-medical"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{medicalRecords.length}</h3>
            <p className="stat-label">Medical Records</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-pills"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{activeMedicationsCount}</h3>
            <p className="stat-label">Active Medications</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-heartbeat"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{user?.profile?.healthStatus || 'N/A'}</h3>
            <p className="stat-label">Health Status</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Upcoming Appointments */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <i className="fas fa-calendar-alt"></i>
              Upcoming Appointments
            </h2>
              <a href="/patient/appointments" className="view-all-link">
                View All
              </a>
          </div>
          
          <div className="appointments-list">
            {appointments.slice(0, 3).map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-info">
                  <h4 className="appointment-doctor">{appointment.doctor}</h4>
                  <p className="appointment-specialization">{appointment.specialization}</p>
                  <div className="appointment-details">
                    <span className="appointment-date">
                      <i className="fas fa-calendar"></i>
                      {safeFormat(appointment.date)}
                    </span>
                    <span className="appointment-time">
                      <i className="fas fa-clock"></i>
                      {appointment.time}
                    </span>
                  </div>
                </div>
                <div className="appointment-status">
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Medical Records */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <i className="fas fa-file-medical-alt"></i>
              Recent Medical Records
            </h2>
            <a href="/patient/medical-records" className="view-all-link">
              View All
            </a>
          </div>
          
          <div className="records-list">
            {medicalRecords.slice(0, 3).map((record) => (
              <div key={record.id} className="record-item">
                <div className="record-header">
                  <div className="record-doctor">
                    <div className="doctor-avatar">
                      {getInitials(record.doctor)}
                    </div>
                    <div className="doctor-info">
                      <h4 className="doctor-name">{record.doctor}</h4>
                      <p className="record-date">
                        {safeFormat(record.date)}
                      </p>
                    </div>
                  </div>
                  <span className="record-type">{record.type}</span>
                </div>
                <div className="record-content">
                  <p className="record-diagnosis">{record.diagnosis}</p>
                  {record.medications.length > 0 && (
                    <div className="record-medications">
                      <strong>Medications:</strong>
                      <span>{record.medications.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3 className="section-title">Quick Actions</h3>
        <div className="actions-grid">
              <a href="/appointments/book" className="action-card">
            <div className="action-icon">
              <i className="fas fa-calendar-plus"></i>
            </div>
            <div className="action-content">
              <h4>Book Appointment</h4>
              <p>Schedule a new appointment</p>
            </div>
          </a>
          
          <a href="/patient/profile" className="action-card">
            <div className="action-icon">
              <i className="fas fa-user-edit"></i>
            </div>
            <div className="action-content">
              <h4>Update Profile</h4>
              <p>Update your personal information</p>
            </div>
          </a>
          
          <a href="/patient/medical-records" className="action-card">
            <div className="action-icon">
              <i className="fas fa-history"></i>
            </div>
            <div className="action-content">
              <h4>View History</h4>
              <p>Check your medical history</p>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .patient-dashboard {
          animation: fadeIn 0.5s ease-in;
        }
        
        .welcome-section {
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark));
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
        
        .user-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          font-weight: 600;
        }
        
        .avatar-initials {
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
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-blue);
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
          display: flex;
          justify-content: space-between;
          align-items: center;
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
        
        .view-all-link {
          color: var(--primary-blue);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: 500;
        }
        
        .view-all-link:hover {
          text-decoration: underline;
        }
        
        .appointments-list,
        .records-list {
          padding: var(--spacing-4);
        }
        
        .appointment-item,
        .record-item {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-100);
          transition: background-color 0.2s ease;
        }
        
        .appointment-item:last-child,
        .record-item:last-child {
          border-bottom: none;
        }
        
        .appointment-item:hover,
        .record-item:hover {
          background-color: var(--gray-50);
        }
        
        .appointment-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .appointment-doctor {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .appointment-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .appointment-details {
          display: flex;
          gap: var(--spacing-4);
          font-size: var(--font-size-sm);
          color: var(--gray-600);
        }
        
        .appointment-details i {
          margin-right: var(--spacing-1);
        }
        
        .record-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-3);
        }
        
        .record-doctor {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }
        
        .doctor-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-sm);
        }
        
        .doctor-name {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
        }
        
        .record-date {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .record-type {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .record-content {
          margin-left: var(--spacing-11);
        }
        
        .record-diagnosis {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .record-medications {
          font-size: var(--font-size-xs);
          color: var(--gray-600);
        }
        
        .record-medications strong {
          color: var(--gray-700);
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
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-blue);
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
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default PatientDashboard