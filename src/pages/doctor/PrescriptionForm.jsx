import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const PrescriptionForm = () => {
  const { patientId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [form, setForm] = useState({ medication: '', dosage: '', frequency: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const newErrors = {}
    if (!form.medication) newErrors.medication = 'Medication is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/records', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ patient_id: patientId, doctor_id: user.id, prescription: form.medication, notes: `Dosage: ${form.dosage}, Frequency: ${form.frequency}` })
        })
        const data = await res.json()
        if (res.ok) {
          navigate(`/doctor/patient-records/${patientId}`)
        } else {
          alert(data.error || 'Failed to save prescription')
        }
      } catch (e) {
        console.error(e)
        alert('Network error')
      }
    })()
  }

  return (
    <div className="prescription-form">
      <h2>Create Prescription for patient {patientId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Medication</label>
          <input name="medication" value={form.medication} onChange={handleChange} />
          {errors.medication && <div className="error-message">{errors.medication}</div>}
        </div>
        <div className="form-group">
          <label>Dosage</label>
          <input name="dosage" value={form.dosage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Frequency</label>
          <input name="frequency" value={form.frequency} onChange={handleChange} />
        </div>
        <button className="btn btn-primary" type="submit">Save Prescription</button>
      </form>
    </div>
  )
}

export default PrescriptionForm
