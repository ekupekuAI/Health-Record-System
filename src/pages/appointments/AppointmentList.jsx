import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const AppointmentList = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingAppointment, setEditingAppointment] = useState(null)
  const [filterStatus, setFilterStatus] = useState('all')

  // Data loaded from API

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/appointments', { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        if (res.ok && Array.isArray(data.appointments)) {
          const mapped = await Promise.all(data.appointments.map(async (a) => {
            let patientName = a.patient_id
            let doctorName = a.doctor_id
            try {
              const pres = await fetch(`/api/users/${a.patient_id}`, { headers: { Authorization: `Bearer ${token}` } })
              if (pres.ok) {
                const pj = await pres.json()
                patientName = pj.user?.name || patientName
              }
            } catch (e) {}
            try {
              const dres = await fetch(`/api/users/${a.doctor_id}`, { headers: { Authorization: `Bearer ${token}` } })
              if (dres.ok) {
                const dj = await dres.json()
                doctorName = dj.user?.name || doctorName
              }
            } catch (e) {}
            const dt = new Date(a.datetime)
            return {
              id: a._id || a.id,
              patientName,
              doctorName,
              specialization: '',
              date: isNaN(dt) ? a.datetime : dt.toISOString().split('T')[0],
              time: isNaN(dt) ? '' : dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              status: a.status,
              type: a.type || 'Consultation',
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
      case 'cancelled':
        return <span className="badge badge-error">Cancelled</span>
      default:
        return <span className="badge badge-info">{status}</span>
    }
  }

  const handleStatusChange = (appointmentId, newStatus) => {
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch(`/api/appointments/${appointmentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ status: newStatus })
        })
        if (res.ok) {
          const data = await res.json()
          setAppointments(appointments.map(a => a.id === appointmentId ? { ...a, status: data.appointment.status } : a))
        } else {
          const err = await res.json()
          alert(err.error || 'Failed to update status')
        }
      } catch (e) {
        console.error('Failed to update status', e)
        alert('Network error')
      }
    })()
  }

  const handleSaveEdit = (updated) => {
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch(`/api/appointments/${updated.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(updated)
        })
        if (res.ok) {
          const data = await res.json()
          setAppointments(appointments.map(a => a.id === updated.id ? { ...a, ...data.appointment } : a))
        } else {
          const err = await res.json()
          alert(err.error || 'Failed to save')
        }
      } catch (e) {
        console.error('Save failed', e)
        alert('Network error')
      }
      setShowEditModal(false)
      setEditingAppointment(null)
    })()
  }

  const filteredAppointments = filterStatus === 'all' 
    ? appointments 
    : appointments.filter(apt => apt.status === filterStatus)

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="appointment-list">
      <div className="page-header">
        <h1 className="page-title">Appointment Management</h1>
        <div className="header-actions">
          <select
            className="filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Appointments</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Link to="/appointments/book" className="btn btn-primary">
            <i className="fas fa-plus"></i>
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="appointments-container">
        <div className="appointments-table">
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="patient-info">
                      <div className="patient-name">{appointment.patientName}</div>
                      <div className="appointment-notes">{appointment.notes}</div>
                    </div>
                  </td>
                  <td>
                    <div className="doctor-info">
                      <div className="doctor-name">{appointment.doctorName}</div>
                      <div className="doctor-specialization">{appointment.specialization}</div>
                    </div>
                  </td>
                  <td>
                    <div className="appointment-datetime">
                      <div className="appointment-date">
                        {format(new Date(appointment.date), 'MMM dd, yyyy')}
                      </div>
                      <div className="appointment-time">{appointment.time}</div>
                    </div>
                  </td>
                  <td>
                    <span className="appointment-type">{appointment.type}</span>
                  </td>
                  <td>
                    {getStatusBadge(appointment.status)}
                  </td>
                  <td>
                    <div className="action-buttons">
                      {appointment.status === 'pending' && (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleStatusChange(appointment.id, 'approved')}
                          title="Approve"
                        >
                          <i className="fas fa-check"></i>
                        </button>
                      )}
                      {appointment.status === 'approved' && (
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                          title="Cancel"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      )}
                      <button
                        className="btn btn-sm btn-secondary"
                        title="Edit"
                        onClick={() => { setEditingAppointment(appointment); setShowEditModal(true) }}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredAppointments.length === 0 && (
          <div className="no-results">
            <i className="fas fa-calendar-times"></i>
            <p>No appointments found for the selected filter.</p>
          </div>
        )}
      </div>

      <style>{`
        .appointment-list {
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
        
        .header-actions {
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
        }
        
        .filter-select {
          padding: var(--spacing-2) var(--spacing-3);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          background: var(--white);
          cursor: pointer;
          min-width: 150px;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        
        .appointments-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .appointments-table {
          overflow-x: auto;
        }
        
        .table {
          width: 100%;
          border-collapse: collapse;
          background: var(--white);
        }
        
        .table th {
          background: var(--gray-50);
          padding: var(--spacing-4);
          text-align: left;
          font-weight: 600;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .table td {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-200);
          font-size: var(--font-size-sm);
        }
        
        .table tbody tr:hover {
          background-color: var(--gray-50);
        }
        
        .patient-info,
        .doctor-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .patient-name,
        .doctor-name {
          font-weight: 600;
          color: var(--gray-800);
          font-size: var(--font-size-base);
        }
        
        .appointment-notes,
        .doctor-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
        }
        
        .appointment-datetime {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .appointment-date {
          font-weight: 500;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
        }
        
        .appointment-time {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
        }
        
        .appointment-type {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .action-buttons {
          display: flex;
          gap: var(--spacing-2);
        }
        
        .no-results {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-results i {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-4);
          display: block;
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .header-actions {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-select {
            min-width: auto;
          }
          
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
      {/* Edit Appointment Modal */}
      {showEditModal && editingAppointment && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Edit Appointment</h2>
              <button className="close-button" onClick={() => setShowEditModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(editingAppointment); }} className="edit-appointment-form">
                <div className="form-group">
                  <label className="form-label">Patient</label>
                  <input type="text" className="form-control" value={editingAppointment.patientName} onChange={(e) => setEditingAppointment({ ...editingAppointment, patientName: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Doctor</label>
                  <input type="text" className="form-control" value={editingAppointment.doctorName} onChange={(e) => setEditingAppointment({ ...editingAppointment, doctorName: e.target.value })} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" value={editingAppointment.date} onChange={(e) => setEditingAppointment({ ...editingAppointment, date: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Time</label>
                    <input type="time" className="form-control" value={editingAppointment.time} onChange={(e) => setEditingAppointment({ ...editingAppointment, time: e.target.value })} />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppointmentList