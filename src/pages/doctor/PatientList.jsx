import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const PatientList = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  // component state
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const safeFormat = (dateStr) => {
    if (!dateStr) return 'N/A'
    const d = new Date(dateStr)
    if (isNaN(d)) return 'N/A'
    return format(d, 'MMM dd, yyyy')
  }

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true)
      setPatients([])
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/appointments', { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        if (res.ok && Array.isArray(data.appointments)) {
          // collect unique patient ids
          const patientIds = Array.from(new Set(data.appointments.map(a => a.patient_id)))

          // fetch in chunks to avoid overwhelming the backend / browser
          const chunkSize = 8
          const aggregated = []
          for (let i = 0; i < patientIds.length; i += chunkSize) {
            const chunk = patientIds.slice(i, i + chunkSize)
            const chunkPromises = chunk.map(async (pid) => {
              try {
                const pres = await fetch(`/api/users/${pid}`, { headers: { Authorization: `Bearer ${token}` } })
                if (pres.ok) {
                  const pj = await pres.json()
                  const pu = pj.user
                  return {
                    id: pu._id,
                    name: pu.name || '',
                    email: pu.email || '',
                    phone: pu.profile?.phone || '',
                    dateOfBirth: pu.profile?.dateOfBirth || '',
                    gender: pu.profile?.gender || '',
                    bloodType: pu.profile?.bloodType || '',
                    allergies: pu.profile?.allergies || [],
                    lastVisit: pu.profile?.lastVisit || '',
                    nextAppointment: pu.profile?.nextAppointment || '',
                    status: 'active',
                    condition: pu.profile?.condition || '',
                    medications: pu.profile?.medications || [],
                    notes: pu.profile?.notes || ''
                  }
                }
              } catch (e) {
                console.error('Failed to fetch patient', e)
              }
              return { id: pid, name: String(pid), email: '', phone: '', dateOfBirth: '', gender: '', bloodType: '', allergies: [], lastVisit: '', nextAppointment: '', status: 'active', condition: '', medications: [], notes: '' }
            })

            // wait for this batch, then append to UI so users see progress
            const chunkResults = await Promise.all(chunkPromises)
            aggregated.push(...chunkResults)
            setPatients(prev => [...prev, ...chunkResults])
          }

          // ensure final state is set
          setPatients(aggregated)
        }
      } catch (e) {
        console.error('Failed to fetch patients', e)
      }
      setLoading(false)
    }
    fetchPatients()
  }, [])

  const handlePatientClick = (patientId) => {
    navigate(`/doctor/patient-records/${patientId}`)
  }

  const handleNewPrescription = (patientId) => {
    navigate(`/doctor/prescription/${patientId}`)
  }

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'all' || patient.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className="badge badge-success">Active</span>
      case 'inactive':
        return <span className="badge badge-error">Inactive</span>
      default:
        return <span className="badge badge-info">{status}</span>
    }
  }

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return ''
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    if (isNaN(birthDate)) return ''
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="patient-list">
      <div className="page-header">
        <h1 className="page-title">Patient Management</h1>
        <div className="header-actions">
          <div className="search-filter-group">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="patients-container">
        <div className="patients-grid">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="patient-card">
              <div className="card-header">
                <div className="patient-info">
                  <div className="patient-avatar">
                    {getInitials(patient.name)}
                  </div>
                  <div className="patient-details">
                    <h3 className="patient-name">{patient.name}</h3>
                    <p className="patient-email">{patient.email}</p>
                    <div className="patient-meta">
                      <span className="patient-gender">{patient.gender}</span>
                      <span className="patient-age">{calculateAge(patient.dateOfBirth)} years</span>
                      <span className="patient-blood-type">{patient.bloodType}</span>
                    </div>
                  </div>
                </div>
                <div className="patient-status">
                  {getStatusBadge(patient.status)}
                </div>
              </div>
              
              <div className="card-body">
                <div className="patient-section">
                  <h4 className="section-title">Medical Information</h4>
                  <div className="info-grid">
                    <div className="info-item">
                      <label className="info-label">Condition</label>
                      <p className="info-value">{patient.condition}</p>
                    </div>
                    <div className="info-item">
                      <label className="info-label">Allergies</label>
                      <p className="info-value">
                        {patient.allergies.length > 0 ? patient.allergies.join(', ') : 'None'}
                      </p>
                    </div>
                    <div className="info-item">
                      <label className="info-label">Current Medications</label>
                      <p className="info-value">{patient.medications.join(', ')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="patient-section">
                  <h4 className="section-title">Visit Information</h4>
                  <div className="info-grid">
                    <div className="info-item">
                      <label className="info-label">Last Visit</label>
                      <p className="info-value">
                        {safeFormat(patient.lastVisit)}
                      </p>
                    </div>
                    <div className="info-item">
                      <label className="info-label">Next Appointment</label>
                      <p className="info-value">
                        {safeFormat(patient.nextAppointment)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {patient.notes && (
                  <div className="patient-section">
                    <h4 className="section-title">Doctor's Notes</h4>
                    <p className="notes-text">{patient.notes}</p>
                  </div>
                )}
              </div>
              
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handlePatientClick(patient.id)}
                >
                  <i className="fas fa-file-medical"></i>
                  View Records
                </button>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => handleNewPrescription(patient.id)}
                >
                  <i className="fas fa-prescription"></i>
                  Prescription
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPatients.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No patients found matching your criteria.</p>
          </div>
        )}
      </div>

      <style>{`
        .patient-list {
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
        
        .search-filter-group {
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
        }
        
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-box i {
          position: absolute;
          left: var(--spacing-3);
          color: var(--gray-400);
          z-index: 1;
        }
        
        .search-box input {
          padding-left: var(--spacing-10);
          padding-right: var(--spacing-3);
          padding-top: var(--spacing-2);
          padding-bottom: var(--spacing-2);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          min-width: 250px;
          transition: border-color 0.2s ease;
        }
        
        .search-box input:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        
        .filter-select {
          padding: var(--spacing-2) var(--spacing-3);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          background: var(--white);
          cursor: pointer;
          min-width: 120px;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        
        .patients-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .patients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-6);
          padding: var(--spacing-6);
        }
        
        .patient-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          transition: all 0.2s ease;
        }
        
        .patient-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-4);
          padding-bottom: var(--spacing-4);
          border-bottom: 1px solid var(--gray-200);
        }
        
        .patient-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .patient-avatar {
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
        
        .patient-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .patient-email {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .patient-meta {
          display: flex;
          gap: var(--spacing-3);
          font-size: var(--font-size-xs);
          color: var(--gray-500);
        }
        
        .patient-meta span {
          background: var(--gray-100);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
        }
        
        .card-body {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
        
        .patient-section {
          border-bottom: 1px solid var(--gray-100);
          padding-bottom: var(--spacing-4);
        }
        
        .patient-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .section-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-700);
          margin: 0 0 var(--spacing-3) 0;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--spacing-3);
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .info-label {
          font-size: var(--font-size-xs);
          font-weight: 500;
          color: var(--gray-500);
          margin: 0;
        }
        
        .info-value {
          font-size: var(--font-size-sm);
          color: var(--gray-800);
          margin: 0;
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
          margin-top: var(--spacing-4);
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--gray-200);
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
          
          .search-filter-group {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-box input {
            min-width: auto;
          }
          
          .patients-grid {
            grid-template-columns: 1fr;
            padding: var(--spacing-4);
          }
          
          .card-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default PatientList