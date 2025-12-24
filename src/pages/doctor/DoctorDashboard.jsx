import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const DoctorDashboard = () => {
  const { user } = useAuth()
  const [todayAppointments, setTodayAppointments] = useState([])
  const [patientStats, setPatientStats] = useState({})
  const [recentPatients, setRecentPatients] = useState([])
  const [loading, setLoading] = useState(true)

  // Data loaded from API for today's appointments

  // Data computed from API results for patient statistics

  // Recent patients derived from API

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/appointments', { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        let appts = []
        if (res.ok && Array.isArray(data.appointments)) {
          // filter today's appointments for this doctor
          const todayStr = new Date().toISOString().slice(0, 10)
          appts = data.appointments.filter(a => (a.doctor_id === user?.id) && (a.datetime?.slice(0,10) === todayStr))
          // map to UI shape
          const mapped = await Promise.all(appts.map(async (a) => {
            let patientName = a.patient_id
            try {
              const pres = await fetch(`/api/users/${a.patient_id}`, { headers: { Authorization: `Bearer ${token}` } })
              if (pres.ok) {
                const pj = await pres.json()
                patientName = pj.user?.name || patientName
              }
            } catch (e) {}
            const time = new Date(a.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            return { id: a._id || a.id, patientName, time, type: a.type || 'Consultation', status: a.status || 'scheduled', notes: a.notes || '' }
          }))
          setTodayAppointments(mapped)
          // stats
          const uniquePatients = new Set(data.appointments.filter(a => a.doctor_id === user?.id).map(a => a.patient_id))
          const completedToday = data.appointments.filter(a => a.doctor_id === user?.id && a.status === 'completed' && a.datetime?.slice(0,10) === todayStr).length
          // derive pending reports as number of pending appointments for this doctor
          const pendingReports = data.appointments.filter(a => a.doctor_id === user?.id && a.status === 'pending').length
          setPatientStats({ totalPatients: uniquePatients.size, todayAppointments: mapped.length, completedToday, pendingReports })
          // recent patients - derive from appointments
          const recent = Array.from(uniquePatients).slice(0,4)
          const recentMapped = await Promise.all(recent.map(async (pid) => {
            try {
              const pres = await fetch(`/api/users/${pid}`, { headers: { Authorization: `Bearer ${token}` } })
              if (pres.ok) {
                const pj = await pres.json()
                const pu = pj.user
                return { id: pu._id, name: pu.name || '', lastVisit: pu.profile?.lastVisit || '', condition: pu.profile?.condition || '', status: pu.profile?.status || 'stable', nextAppointment: pu.profile?.nextAppointment || '' }
              }
            } catch (e) {}
            return { id: pid, name: String(pid), lastVisit: '', condition: '', status: 'stable', nextAppointment: '' }
          }))
          setRecentPatients(recentMapped)
        }
      } catch (e) {
        console.error('Failed to fetch doctor dashboard data', e)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const getStatusBadge = (status) => {
    switch (status) {
      case 'scheduled':
        return <span className="badge badge-info">Scheduled</span>
      case 'completed':
        return <span className="badge badge-success">Completed</span>
      case 'cancelled':
        return <span className="badge badge-error">Cancelled</span>
      default:
        return <span className="badge badge-info">{status}</span>
    }
  }

  const getPatientStatusBadge = (status) => {
    switch (status) {
      case 'stable':
        return <span className="badge badge-success">Stable</span>
      case 'monitoring':
        return <span className="badge badge-warning">Monitoring</span>
      case 'improving':
        return <span className="badge badge-info">Improving</span>
      case 'critical':
        return <span className="badge badge-error">Critical</span>
      default:
        return <span className="badge badge-info">{status}</span>
    }
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="doctor-dashboard">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-header">
          <div className="doctor-avatar-large">
            <span className="avatar-initials">
              {getInitials(`${user.firstName} ${user.lastName}`)}
            </span>
          </div>
          <div className="welcome-content">
            <h1 className="welcome-title">
              Good morning, Dr. {user.lastName}!
            </h1>
            <p className="welcome-subtitle">
              Here's your schedule for today - {format(new Date(), 'EEEE, MMMM dd, yyyy')}
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
            <h3 className="stat-number">{patientStats.totalPatients}</h3>
            <p className="stat-label">Total Patients</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar-day"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{patientStats.todayAppointments}</h3>
            <p className="stat-label">Today's Appointments</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{patientStats.completedToday}</h3>
            <p className="stat-label">Completed Today</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-file-medical"></i>
          </div>
          <div className="stat-content">
            <h3 className="stat-number">{patientStats.pendingReports}</h3>
            <p className="stat-label">Pending Reports</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Today's Schedule */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <i className="fas fa-calendar-alt"></i>
              Today's Schedule
            </h2>
            <span className="appointment-count">
              {todayAppointments.length} appointments
            </span>
          </div>
          
          <div className="appointments-list">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-time">
                  {appointment.time}
                </div>
                <div className="appointment-details">
                  <div className="appointment-patient">
                    <div className="patient-avatar">
                      {getInitials(appointment.patientName)}
                    </div>
                    <div className="patient-info">
                      <h4 className="patient-name">{appointment.patientName}</h4>
                      <p className="appointment-type">{appointment.type}</p>
                      <p className="appointment-notes">{appointment.notes}</p>
                    </div>
                  </div>
                </div>
                <div className="appointment-status">
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <i className="fas fa-user-friends"></i>
              Recent Patients
            </h2>
            <a href="/doctor/patients" className="view-all-link">
              View All Patients
            </a>
          </div>
          
          <div className="patients-list">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="patient-item">
                <div className="patient-info">
                  <div className="patient-avatar">
                    {getInitials(patient.name)}
                  </div>
                  <div className="patient-details">
                    <h4 className="patient-name">{patient.name}</h4>
                    <p className="patient-condition">{patient.condition}</p>
                    <p className="last-visit">
                      Last visit: {format(new Date(patient.lastVisit), 'MMM dd, yyyy')}
                    </p>
                  </div>
                </div>
                <div className="patient-status">
                  {getPatientStatusBadge(patient.status)}
                  <p className="next-appointment">
                    Next: {format(new Date(patient.nextAppointment), 'MMM dd')}
                  </p>
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
          <a href="/doctor/patients" className="action-card">
            <div className="action-icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <div className="action-content">
              <h4>View Patients</h4>
              <p>Manage patient records</p>
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
          
          <a href="/doctor/prescription/new" className="action-card">
            <div className="action-icon">
              <i className="fas fa-prescription"></i>
            </div>
            <div className="action-content">
              <h4>New Prescription</h4>
              <p>Create prescription for patient</p>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .doctor-dashboard {
          animation: fadeIn 0.5s ease-in;
        }
        
        .welcome-section {
          background: linear-gradient(135deg, var(--primary-green), var(--primary-green-dark));
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
        
        .doctor-avatar-large {
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
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-green);
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
        
        .appointment-count {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
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
        .patients-list {
          padding: var(--spacing-4);
        }
        
        .appointment-item,
        .patient-item {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-100);
          transition: background-color 0.2s ease;
        }
        
        .appointment-item:last-child,
        .patient-item:last-child {
          border-bottom: none;
        }
        
        .appointment-item:hover,
        .patient-item:hover {
          background-color: var(--gray-50);
        }
        
        .appointment-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--spacing-3);
        }
        
        .appointment-time {
          font-weight: 600;
          color: var(--primary-green);
          font-size: var(--font-size-sm);
          min-width: 60px;
        }
        
        .appointment-patient {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .patient-avatar {
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
        
        .patient-name {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .appointment-type {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .appointment-notes {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          margin: 0;
        }
        
        .appointment-status {
          flex-shrink: 0;
        }
        
        .patient-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .patient-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .patient-details {
          flex: 1;
        }
        
        .patient-condition {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: var(--spacing-1) 0;
        }
        
        .last-visit {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          margin: 0;
        }
        
        .patient-status {
          text-align: right;
          flex-shrink: 0;
        }
        
        .next-appointment {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
          margin: var(--spacing-1) 0 0 0;
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
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-green);
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
          
          .appointment-item {
            flex-direction: column;
            gap: var(--spacing-2);
          }
          
          .appointment-patient {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .patient-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-3);
          }
          
          .patient-status {
            text-align: left;
          }
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default DoctorDashboard