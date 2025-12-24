import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const PatientAppointments = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('upcoming')
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/appointments', { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        if (res.ok && Array.isArray(data.appointments)) {
          // enrich with doctor info
          const mapped = await Promise.all(data.appointments.map(async (a) => {
            let doctorName = a.doctor_id
            try {
              const dres = await fetch(`/api/users/${a.doctor_id}`, { headers: { Authorization: `Bearer ${token}` } })
              if (dres.ok) {
                const djson = await dres.json()
                doctorName = djson.user?.name || doctorName
              }
            } catch (e) {}
            const dt = new Date(a.datetime)
            return {
              id: a._id || a.id,
              doctor: doctorName,
              specialization: '',
              date: isNaN(dt) ? a.datetime : dt.toISOString().split('T')[0],
              time: isNaN(dt) ? '' : dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              status: a.status,
              type: a.type || 'Consultation',
              location: a.location || '',
              notes: a.notes || ''
            }
          }))
          setAppointments(mapped)
        }
      } catch (e) {
        console.error('Failed to fetch appointments', e)
      }
      setLoading(false)
    }
    fetchAppointments()
  }, [])

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return <span className="badge badge-success">Approved</span>
      case 'pending':
        return <span className="badge badge-warning">Pending</span>
      case 'completed':
        return <span className="badge badge-info">Completed</span>
      case 'cancelled':
        return <span className="badge badge-error">Cancelled</span>
      default:
        return <span className="badge badge-info">{status}</span>
    }
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const filteredAppointments = appointments.filter(apt => {
    const today = new Date()
    const appointmentDate = new Date(apt.date)
    
    switch (activeTab) {
      case 'upcoming':
        return appointmentDate >= today && apt.status !== 'cancelled'
      case 'pending':
        return apt.status === 'pending'
      case 'completed':
        return apt.status === 'completed'
      case 'cancelled':
        return apt.status === 'cancelled'
      default:
        return true
    }
  })

  const handleCancelAppointment = (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return
    const token = localStorage.getItem('healthRecordToken')
    ;(async () => {
      try {
        const res = await fetch(`/api/appointments/${appointmentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ action: 'cancel' })
        })
        if (res.ok) {
          const data = await res.json()
          setAppointments(appointments.map(apt => apt.id === appointmentId ? { ...apt, status: data.appointment.status } : apt))
        } else {
          const err = await res.json()
          alert(err.error || 'Failed to cancel')
        }
      } catch (e) {
        console.error('Cancel failed', e)
        alert('Network error')
      }
    })()
  }

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="patient-appointments">
      <div className="page-header">
        <h1 className="page-title">My Appointments</h1>
        <a href="/appointments/book" className="btn btn-primary">
          <i className="fas fa-plus"></i>
          Book New Appointment
        </a>
      </div>

      <div className="appointments-tabs">
        <button
          className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`tab-button ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending
        </button>
        <button
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
        <button
          className={`tab-button ${activeTab === 'cancelled' ? 'active' : ''}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Cancelled
        </button>
      </div>

      <div className="appointments-container">
        {filteredAppointments.length === 0 ? (
          <div className="no-appointments">
            <i className="fas fa-calendar-times"></i>
            <h3>No {activeTab} appointments found</h3>
            <p>
              {activeTab === 'upcoming' && 'You have no upcoming appointments scheduled.'}
              {activeTab === 'pending' && 'You have no pending appointments.'}
              {activeTab === 'completed' && 'You have no completed appointments.'}
              {activeTab === 'cancelled' && 'You have no cancelled appointments.'}
            </p>
            {activeTab === 'upcoming' && (
              <a href="/appointments/book" className="btn btn-primary">
                Book Your First Appointment
              </a>
            )}
          </div>
        ) : (
          <div className="appointments-grid">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="appointment-card">
                <div className="card-header">
                  <div className="doctor-info">
                    <div className="doctor-avatar">
                      {getInitials(appointment.doctor)}
                    </div>
                    <div className="doctor-details">
                      <h3 className="doctor-name">{appointment.doctor}</h3>
                      <p className="doctor-specialization">{appointment.specialization}</p>
                    </div>
                  </div>
                  <div className="appointment-status">
                    {getStatusBadge(appointment.status)}
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="appointment-datetime">
                    <div className="appointment-date">
                      <i className="fas fa-calendar"></i>
                      {format(new Date(appointment.date), 'EEEE, MMMM dd, yyyy')}
                    </div>
                    <div className="appointment-time">
                      <i className="fas fa-clock"></i>
                      {appointment.time}
                    </div>
                  </div>
                  
                  <div className="appointment-details">
                    <div className="detail-item">
                      <i className="fas fa-stethoscope"></i>
                      <span className="detail-label">Type:</span>
                      <span className="detail-value">{appointment.type}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{appointment.location}</span>
                    </div>
                  </div>
                  
                  {appointment.notes && (
                    <div className="appointment-notes">
                      <h4 className="notes-title">Notes</h4>
                      <p className="notes-text">{appointment.notes}</p>
                    </div>
                  )}
                </div>
                
                <div className="card-footer">
                  {appointment.status === 'approved' && new Date(appointment.date) >= new Date() && (
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => handleCancelAppointment(appointment.id)}
                    >
                      <i className="fas fa-times"></i>
                      Cancel Appointment
                    </button>
                  )}
                  {appointment.status === 'pending' && (
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => alert('Reschedule functionality would be implemented here')}
                    >
                      <i className="fas fa-calendar-alt"></i>
                      Reschedule
                    </button>
                  )}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => alert('View details functionality would be implemented here')}
                  >
                    <i className="fas fa-eye"></i>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .patient-appointments {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
          flex-wrap: wrap;
          gap: var(--spacing-4);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .appointments-tabs {
          display: flex;
          gap: var(--spacing-1);
          margin-bottom: var(--spacing-8);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .tab-button {
          background: none;
          border: none;
          padding: var(--spacing-3) var(--spacing-6);
          font-size: var(--font-size-base);
          font-weight: 500;
          color: var(--gray-600);
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.2s ease;
        }
        
        .tab-button:hover {
          color: var(--primary-blue);
          background-color: rgba(59, 130, 246, 0.05);
        }
        
        .tab-button.active {
          color: var(--primary-blue);
          border-bottom-color: var(--primary-blue);
          background-color: rgba(59, 130, 246, 0.1);
        }
        
        .appointments-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-6);
        }
        
        .appointments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-6);
        }
        
        .appointment-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.2s ease;
        }
        
        .appointment-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }
        
        .card-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: var(--gray-50);
        }
        
        .doctor-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .doctor-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-base);
          flex-shrink: 0;
        }
        
        .doctor-details {
          flex: 1;
          min-width: 0;
        }
        
        .doctor-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .doctor-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .appointment-status {
          flex-shrink: 0;
        }
        
        .card-body {
          padding: var(--spacing-6);
        }
        
        .appointment-datetime {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
        }
        
        .appointment-date,
        .appointment-time {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          font-size: var(--font-size-sm);
        }
        
        .appointment-date {
          color: var(--gray-700);
          font-weight: 500;
        }
        
        .appointment-time {
          color: var(--gray-600);
        }
        
        .appointment-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .detail-item i {
          color: var(--gray-400);
          width: 16px;
          text-align: center;
        }
        
        .detail-label {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          font-weight: 500;
          min-width: 60px;
        }
        
        .detail-value {
          color: var(--gray-800);
          font-size: var(--font-size-sm);
        }
        
        .appointment-type {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .appointment-notes {
          background: var(--gray-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
        }
        
        .notes-title {
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--gray-700);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .notes-text {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          line-height: 1.5;
          margin: 0;
        }
        
        .card-footer {
          display: flex;
          gap: var(--spacing-3);
          padding: var(--spacing-6);
          border-top: 1px solid var(--gray-200);
          background: var(--gray-50);
        }
        
        .no-appointments {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-appointments i {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-4);
          display: block;
        }
        
        .no-appointments h3 {
          color: var(--gray-600);
          font-size: var(--font-size-xl);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .no-appointments p {
          color: var(--gray-500);
          font-size: var(--font-size-base);
          margin: 0 0 var(--spacing-4) 0;
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .appointments-tabs {
            overflow-x: auto;
            white-space: nowrap;
          }
          
          .appointments-grid {
            grid-template-columns: 1fr;
          }
          
          .card-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default PatientAppointments