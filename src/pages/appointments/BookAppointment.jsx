import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


const BookAppointment = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [doctors, setDoctors] = useState([])
  const [form, setForm] = useState({ patientName: user ? `${user.firstName} ${user.lastName}` : '', doctor: '', date: '', time: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const newErrors = {}
    if (!form.patientName) newErrors.patientName = 'Patient name is required'
    if (!form.doctor) newErrors.doctor = 'Doctor is required'
    if (!form.date) newErrors.date = 'Date is required'
    if (form.date) {
      const selected = new Date(form.date)
      const today = new Date()
      today.setHours(0,0,0,0)
      if (selected < today) newErrors.date = 'Date cannot be in the past'
    }
    if (!form.time) newErrors.time = 'Time is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          // submit only doctor_id per ownership rule
          body: JSON.stringify({ doctor_id: form.doctor, date: form.date, time: form.time, notes: form.notes })
        })
        const data = await res.json()
        setLoading(false)
        if (res.ok) {
          setSuccess(true)
          setTimeout(() => navigate('/appointments'), 1000)
          try { const { showToast } = await import('../../utils/toast'); showToast({ type: 'success', message: 'Appointment requested' }) } catch(e) {}
        } else {
          setErrors({ form: data.error || 'Failed to create appointment' })
        }
      } catch (e) {
        setLoading(false)
        setErrors({ form: 'Network error' })
      }
    })()
  }

  useEffect(() => {
    // fetch doctors for dropdown
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/users?role=doctor', { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        if (res.ok && Array.isArray(data.users)) {
          setDoctors(data.users)
          // if no doctor preselected, pick first
          if (!form.doctor && data.users.length) setForm(f => ({ ...f, doctor: data.users[0].id || data.users[0]._id || '' }))
        }
      } catch (e) {}
    })()
  }, [])

  return (
    <div className="book-appointment">
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit} className="appointment-form">
        {success && (
          <div className="alert alert-success">Appointment requested successfully — redirecting...</div>
        )}

        <div className="form-group">
          <label>Patient Name</label>
          <input name="patientName" value={form.patientName} onChange={handleChange} disabled={loading} />
          {errors.patientName && <div className="error-message">{errors.patientName}</div>}
        </div>

        <div className="form-group">
          <label>Doctor</label>
          <select name="doctor" value={form.doctor} onChange={handleChange} disabled={loading}>
            <option value="">Select a doctor</option>
            {doctors.map(d => (
              <option key={d.id || d._id} value={d.id || d._id}>{d.name || d.name}</option>
            ))}
          </select>
          {errors.doctor && <div className="error-message">{errors.doctor}</div>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} disabled={loading} />
            {errors.date && <div className="error-message">{errors.date}</div>}
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} disabled={loading} />
            {errors.time && <div className="error-message">{errors.time}</div>}
          </div>
        </div>

        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} disabled={loading} />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading} aria-busy={loading}>
          {loading ? (<><span className="btn-spinner" aria-hidden="true"></span>Requesting...</>) : 'Request Appointment'}
        </button>
      </form>
    </div>
  )
}

export default BookAppointment
