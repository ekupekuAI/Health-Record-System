import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'

const PatientMedicalRecords = () => {
  const { user } = useAuth()
  const [medicalRecords, setMedicalRecords] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        if (!user?.id) {
          setMedicalRecords([])
          setLoading(false)
          return
        }
        const res = await fetch(`/api/records/patient/${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        if (res.ok && Array.isArray(data.records)) {
          const mapped = data.records.map(r => ({
            id: r._id,
            date: r.created_at || r.date || r.createdAt || '',
            doctor: r.doctor_name || r.doctor_id || r.doctor || '',
            specialization: r.specialization || '',
            type: r.type || 'Record',
            diagnosis: r.diagnosis || '',
            symptoms: r.symptoms || [],
            medications: r.prescription ? [{ name: r.prescription, dosage: '', frequency: '' }] : (r.medications || []),
            tests: r.tests || [],
            notes: r.notes || '',
            followUp: r.followUp || ''
          }))
          setMedicalRecords(mapped)
        }
      } catch (e) {
        console.error('Failed to fetch medical records', e)
      }
      setLoading(false)
    }
    fetchRecords()
  }, [user])

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
    <div className="patient-medical-records">
      <div className="page-header">
        <h1 className="page-title">Medical Records</h1>
        <p className="page-subtitle">Complete history of your medical appointments and treatments</p>
      </div>

      <div className="medical-records-container">
        <div className="timeline">
          {medicalRecords.map((record, index) => (
            <div key={record.id} className="timeline-item">
              <div className="timeline-marker">
                {index === 0 && <div className="timeline-line-top"></div>}
                <div className="timeline-dot"></div>
                {index < medicalRecords.length - 1 && <div className="timeline-line-bottom"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="record-card">
                  <div className="record-header">
                    <div className="doctor-info">
                      <div className="doctor-avatar">
                        {getInitials(record.doctor)}
                      </div>
                      <div className="doctor-details">
                        <h3 className="doctor-name">{record.doctor}</h3>
                        <p className="doctor-specialization">{record.specialization}</p>
                      </div>
                    </div>
                    <div className="record-date">
                      <span className="date-label">{format(new Date(record.date), 'MMMM dd, yyyy')}</span>
                      <span className="record-type">{record.type}</span>
                    </div>
                  </div>
                  
                  <div className="record-body">
                    <div className="record-section">
                      <h4 className="section-title">Diagnosis</h4>
                      <p className="diagnosis-text">{record.diagnosis}</p>
                    </div>
                    
                    {record.symptoms.length > 0 && (
                      <div className="record-section">
                        <h4 className="section-title">Symptoms</h4>
                        <ul className="symptoms-list">
                          {record.symptoms.map((symptom, idx) => (
                            <li key={idx} className="symptom-item">{symptom}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {record.medications.length > 0 && (
                      <div className="record-section">
                        <h4 className="section-title">Prescribed Medications</h4>
                        <div className="medications-list">
                          {record.medications.map((med, idx) => (
                            <div key={idx} className="medication-item">
                              <span className="medication-name">{med.name}</span>
                              <span className="medication-dosage">{med.dosage}</span>
                              <span className="medication-frequency">{med.frequency}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {record.tests.length > 0 && (
                      <div className="record-section">
                        <h4 className="section-title">Tests Performed</h4>
                        <div className="tests-list">
                          {record.tests.map((test, idx) => (
                            <span key={idx} className="test-item">{test}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="record-section">
                      <h4 className="section-title">Doctor's Notes</h4>
                      <p className="notes-text">{record.notes}</p>
                    </div>
                    
                    {record.followUp && (
                      <div className="follow-up">
                        <i className="fas fa-calendar-alt"></i>
                        <span>Follow-up scheduled for {format(new Date(record.followUp), 'MMMM dd, yyyy')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {medicalRecords.length === 0 && (
          <div className="no-records">
            <i className="fas fa-file-medical"></i>
            <h3>No Medical Records Found</h3>
            <p>Your medical history will appear here once you have appointments with doctors.</p>
          </div>
        )}
      </div>

      <style>{`
        .patient-medical-records {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          margin-bottom: var(--spacing-8);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .page-subtitle {
          color: var(--gray-500);
          font-size: var(--font-size-base);
          margin: 0;
        }
        
        .medical-records-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .timeline {
          position: relative;
          padding-left: var(--spacing-8);
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gray-200);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-6);
        }
        
        .timeline-marker {
          position: absolute;
          left: -32px;
          top: var(--spacing-4);
          width: 16px;
          height: 16px;
        }
        
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary-blue);
          border: 3px solid var(--white);
          box-shadow: 0 0 0 3px var(--primary-blue);
          position: relative;
          z-index: 2;
        }
        
        .timeline-line-top,
        .timeline-line-bottom {
          position: absolute;
          left: 7px;
          width: 2px;
          background: var(--gray-200);
        }
        
        .timeline-line-top {
          bottom: 100%;
          height: 20px;
        }
        
        .timeline-line-bottom {
          top: 100%;
          height: calc(100% + 24px);
        }
        
        .timeline-content {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .record-card {
          background: var(--white);
        }
        
        .record-header {
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
        
        .record-date {
          text-align: right;
          flex-shrink: 0;
        }
        
        .date-label {
          font-size: var(--font-size-sm);
          color: var(--gray-600);
          display: block;
          margin-bottom: var(--spacing-1);
        }
        
        .record-type {
          background: var(--primary-blue);
          color: var(--white);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .record-body {
          padding: var(--spacing-6);
        }
        
        .record-section {
          margin-bottom: var(--spacing-6);
        }
        
        .record-section:last-child {
          margin-bottom: 0;
        }
        
        .section-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-700);
          margin: 0 0 var(--spacing-3) 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .section-title::before {
          content: '';
          width: 4px;
          height: 16px;
          background: var(--primary-blue);
          border-radius: 2px;
        }
        
        .diagnosis-text {
          color: var(--gray-800);
          font-size: var(--font-size-base);
          line-height: 1.6;
          margin: 0;
          background: var(--gray-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--primary-blue);
        }
        
        .symptoms-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .symptom-item {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          padding: var(--spacing-2) 0;
          border-bottom: 1px solid var(--gray-100);
        }
        
        .symptom-item:last-child {
          border-bottom: none;
        }
        
        .symptom-item::before {
          content: '•';
          color: var(--primary-blue);
          font-weight: bold;
          margin-right: var(--spacing-2);
        }
        
        .medications-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }
        
        .medication-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-3);
          background: var(--gray-50);
          border-radius: var(--radius-md);
          border: 1px solid var(--gray-200);
        }
        
        .medication-name {
          font-weight: 600;
          color: var(--gray-800);
          font-size: var(--font-size-sm);
        }
        
        .medication-dosage {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          background: var(--white);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          border: 1px solid var(--gray-300);
        }
        
        .medication-frequency {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
          font-style: italic;
        }
        
        .tests-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-2);
        }
        
        .test-item {
          background: var(--gray-100);
          color: var(--gray-700);
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .notes-text {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          line-height: 1.6;
          margin: 0;
          background: var(--gray-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--gray-300);
        }
        
        .follow-up {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-4);
          background: rgba(59, 130, 246, 0.1);
          border-radius: var(--radius-md);
          margin-top: var(--spacing-4);
          color: var(--primary-blue);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }
        
        .follow-up i {
          color: var(--primary-blue);
        }
        
        .no-records {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-records i {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-4);
          display: block;
          color: var(--gray-300);
        }
        
        .no-records h3 {
          color: var(--gray-600);
          font-size: var(--font-size-xl);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .no-records p {
          color: var(--gray-500);
          font-size: var(--font-size-base);
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .timeline {
            padding-left: var(--spacing-4);
          }
          
          .timeline::before {
            left: 8px;
          }
          
          .timeline-marker {
            left: -24px;
          }
          
          .record-header {
            flex-direction: column;
            gap: var(--spacing-3);
            align-items: flex-start;
          }
          
          .record-date {
            text-align: left;
          }
          
          .medication-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-2);
          }
        }
      `}</style>
    </div>
  )
}

export default PatientMedicalRecords