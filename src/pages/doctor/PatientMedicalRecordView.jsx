import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const PatientMedicalRecordView = () => {
  const { patientId } = useParams()
  const { user } = useAuth()
  const [patient, setPatient] = useState(null)
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)

  // form state for adding diagnosis/prescription
  const [diagnosisForm, setDiagnosisForm] = useState({ diagnosis: '', notes: '' })
  const [prescriptionForm, setPrescriptionForm] = useState({ medication: '', dosage: '', frequency: '' })
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        const pres = await fetch(`/api/users/${patientId}`, { headers: { Authorization: `Bearer ${token}` } })
        if (pres.ok) {
          const pj = await pres.json()
          const pu = pj.user
          setPatient({ id: pu._id, name: pu.name || `${pu.firstName || ''} ${pu.lastName || ''}`, dob: pu.profile?.dateOfBirth || '', gender: pu.profile?.gender || '' })
        }
      } catch (e) {
        console.error('Failed to fetch patient', e)
      }
      try {
        const rres = await fetch(`/api/records/patient/${patientId}`, { headers: { Authorization: `Bearer ${token}` } })
        const rj = await rres.json()
        if (rres.ok && Array.isArray(rj.records)) {
          setRecords(rj.records.map(r => ({ id: r._id, date: r.created_at || r.date || '', doctor: r.doctor_name || r.doctor || '', diagnosis: r.diagnosis || '', notes: r.notes || '' })))
        }
      } catch (e) {
        console.error('Failed to fetch records', e)
      }
      setLoading(false)
    }
    fetchData()
  }, [patientId])

  const handleDiagnosisSubmit = (e) => {
    e.preventDefault()
    if (!diagnosisForm.diagnosis.trim()) {
      setMessage({ type: 'error', text: 'Diagnosis text is required' })
      return
    }
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/records', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ patient_id: patientId, doctor_id: user.id, diagnosis: diagnosisForm.diagnosis, notes: diagnosisForm.notes })
        })
        const data = await res.json()
        if (res.ok) {
          setRecords([data.record, ...records])
          setDiagnosisForm({ diagnosis: '', notes: '' })
          setMessage({ type: 'success', text: 'Diagnosis added' })
          setTimeout(() => setMessage(null), 3000)
        } else {
          setMessage({ type: 'error', text: data.error || 'Failed to add diagnosis' })
        }
      } catch (e) {
        console.error(e)
        setMessage({ type: 'error', text: 'Network error' })
      }
    })()
  }

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault()
    if (!prescriptionForm.medication.trim()) {
      setMessage({ type: 'error', text: 'Medication name is required' })
      return
    }
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/records', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ patient_id: patientId, doctor_id: user.id, prescription: prescriptionForm.medication, notes: `Dosage: ${prescriptionForm.dosage}, Frequency: ${prescriptionForm.frequency}` })
        })
        const data = await res.json()
        if (res.ok) {
          setRecords([data.record, ...records])
          setPrescriptionForm({ medication: '', dosage: '', frequency: '' })
          setMessage({ type: 'success', text: 'Prescription added' })
          setTimeout(() => setMessage(null), 3000)
        } else {
          setMessage({ type: 'error', text: data.error || 'Failed to add prescription' })
        }
      } catch (e) {
        console.error(e)
        setMessage({ type: 'error', text: 'Network error' })
      }
    })()
  }

  if (loading) return <div className="loading-overlay"><div className="loading-spinner"></div></div>

  return (
    <div className="patient-record-view">
      <div className="page-header">
        <h1 className="page-title">Patient Record — {patient?.name}</h1>
        <div className="header-actions">
          <Link to="/doctor/patients" className="btn btn-secondary">Back to Patients</Link>
        </div>
      </div>

      {message && (
        <div className={`alert ${message.type === 'error' ? 'alert-error' : 'alert-success'}`}>
          {message.text}
        </div>
      )}

      <div className="record-grid">
        <div className="record-column">
          <div className="card">
            <h3>Patient Details</h3>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>DOB:</strong> {patient.dob}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
          </div>

          <div className="card">
            <h3>Add Diagnosis</h3>
            <form onSubmit={handleDiagnosisSubmit}>
              <div className="form-group">
                <label>Diagnosis</label>
                <textarea value={diagnosisForm.diagnosis} onChange={(e) => setDiagnosisForm({ ...diagnosisForm, diagnosis: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea value={diagnosisForm.notes} onChange={(e) => setDiagnosisForm({ ...diagnosisForm, notes: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-primary">Add Diagnosis</button>
            </form>
          </div>

          <div className="card">
            <h3>Add Prescription</h3>
            <form onSubmit={handlePrescriptionSubmit}>
              <div className="form-group">
                <label>Medication</label>
                <input value={prescriptionForm.medication} onChange={(e) => setPrescriptionForm({ ...prescriptionForm, medication: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Dosage</label>
                <input value={prescriptionForm.dosage} onChange={(e) => setPrescriptionForm({ ...prescriptionForm, dosage: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Frequency</label>
                <input value={prescriptionForm.frequency} onChange={(e) => setPrescriptionForm({ ...prescriptionForm, frequency: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-primary">Add Prescription</button>
            </form>
          </div>
        </div>

        <div className="record-column">
          <div className="card">
            <h3>Medical History</h3>
            <div className="records-list">
              {records.map(r => (
                <div key={r.id} className="record-item">
                  <div className="record-meta">
                    <span className="record-date">{format(new Date(r.date), 'MMM dd, yyyy')}</span>
                    <span className="record-doctor">{r.doctor}</span>
                  </div>
                  <div className="record-body">
                    <p className="record-diagnosis">{r.diagnosis}</p>
                    <p className="record-notes">{r.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientMedicalRecordView
