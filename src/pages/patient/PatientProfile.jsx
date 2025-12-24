import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const PatientProfile = () => {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    dateOfBirth: user.profile?.dateOfBirth || '',
    gender: user.profile?.gender || '',
    phone: user.profile?.phone || '',
    address: user.profile?.address || '',
    bloodType: user.profile?.bloodType || '',
    allergies: user.profile?.allergies?.join(', ') || '',
    emergencyContact: {
      name: user.profile?.emergencyContact?.name || '',
      relationship: user.profile?.emergencyContact?.relationship || '',
      phone: user.profile?.emergencyContact?.phone || ''
    }
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name.startsWith('emergencyContact.')) {
      const field = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    setSuccess(false)
    
    try {
      const updatedData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        phone: formData.phone,
        address: formData.address,
        bloodType: formData.bloodType,
        allergies: formData.allergies ? formData.allergies.split(',').map(a => a.trim()) : [],
        emergencyContact: formData.emergencyContact
      }
      
      const result = await updateProfile(updatedData)
      
      if (result.success) {
        setSuccess(true)
        setIsEditing(false)
        setTimeout(() => setSuccess(false), 3000)
        try { const { showToast } = await import('../../utils/toast'); showToast({ type: 'success', message: 'Profile updated' }) } catch(e) {}
      }
    } catch (error) {
      setErrors({ general: 'Failed to update profile. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      dateOfBirth: user.profile?.dateOfBirth || '',
      gender: user.profile?.gender || '',
      phone: user.profile?.phone || '',
      address: user.profile?.address || '',
      bloodType: user.profile?.bloodType || '',
      allergies: user.profile?.allergies?.join(', ') || '',
      emergencyContact: {
        name: user.profile?.emergencyContact?.name || '',
        relationship: user.profile?.emergencyContact?.relationship || '',
        phone: user.profile?.emergencyContact?.phone || ''
      }
    })
    setErrors({})
  }

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 'N/A'
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="patient-profile">
      <div className="profile-header">
        <h1 className="page-title">Patient Profile</h1>
        {!isEditing && (
          <button 
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            <i className="fas fa-edit"></i>
            Edit Profile
          </button>
        )}
      </div>

      {success && (
        <div className="alert alert-success">
          <i className="fas fa-check-circle"></i>
          Profile updated successfully!
        </div>
      )}

      {errors.general && (
        <div className="alert alert-error">
          <i className="fas fa-exclamation-circle"></i>
          {errors.general}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-section">
            <h2 className="section-title">Personal Information</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  className={`form-control ${errors.firstName ? 'error' : ''}`}
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  className={`form-control ${errors.lastName ? 'error' : ''}`}
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  className="form-control"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  className="form-select"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-control ${errors.phone ? 'error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Address *</label>
              <textarea
                name="address"
                className={`form-control ${errors.address ? 'error' : ''}`}
                rows="3"
                value={formData.address}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Medical Information</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Blood Type</label>
                <select
                  name="bloodType"
                  className="form-select"
                  value={formData.bloodType}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Allergies</label>
                <input
                  type="text"
                  name="allergies"
                  className="form-control"
                  placeholder="e.g., Penicillin, Shellfish, Nuts"
                  value={formData.allergies}
                  onChange={handleChange}
                  disabled={loading}
                />
                <small className="form-text">Separate multiple allergies with commas</small>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Emergency Contact</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Contact Name</label>
                <input
                  type="text"
                  name="emergencyContact.name"
                  className="form-control"
                  value={formData.emergencyContact.name}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Relationship</label>
                <input
                  type="text"
                  name="emergencyContact.relationship"
                  className="form-control"
                  placeholder="e.g., Spouse, Parent, Friend"
                  value={formData.emergencyContact.relationship}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Contact Phone</label>
              <input
                type="tel"
                name="emergencyContact.phone"
                className="form-control"
                value={formData.emergencyContact.phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handleCancel}
              disabled={loading}
              aria-busy={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <div className="spinner" aria-hidden="true"></div>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-view">
          <div className="profile-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label className="info-label">Full Name</label>
                <p className="info-value">{user.firstName} {user.lastName}</p>
              </div>
              <div className="info-item">
                <label className="info-label">Email Address</label>
                <p className="info-value">{user.email}</p>
              </div>
              <div className="info-item">
                <label className="info-label">Date of Birth</label>
                <p className="info-value">
                  {user.profile?.dateOfBirth || 'N/A'}
                  {user.profile?.dateOfBirth && (
                    <span className="age-badge">Age: {calculateAge(user.profile.dateOfBirth)}</span>
                  )}
                </p>
              </div>
              <div className="info-item">
                <label className="info-label">Gender</label>
                <p className="info-value">{user.profile?.gender || 'N/A'}</p>
              </div>
              <div className="info-item">
                <label className="info-label">Phone Number</label>
                <p className="info-value">{user.profile?.phone || 'N/A'}</p>
              </div>
              <div className="info-item">
                <label className="info-label">Address</label>
                <p className="info-value">{user.profile?.address || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="section-title">Medical Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label className="info-label">Blood Type</label>
                <p className="info-value">{user.profile?.bloodType || 'N/A'}</p>
              </div>
              <div className="info-item">
                <label className="info-label">Allergies</label>
                <p className="info-value">
                  {user.profile?.allergies?.length > 0 
                    ? user.profile.allergies.join(', ') 
                    : 'None listed'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2 className="section-title">Emergency Contact</h2>
            <div className="info-grid">
              <div className="info-item">
                <label className="info-label">Contact Name</label>
                <p className="info-value">
                  {user.profile?.emergencyContact?.name || 'N/A'}
                </p>
              </div>
              <div className="info-item">
                <label className="info-label">Relationship</label>
                <p className="info-value">
                  {user.profile?.emergencyContact?.relationship || 'N/A'}
                </p>
              </div>
              <div className="info-item">
                <label className="info-label">Contact Phone</label>
                <p className="info-value">
                  {user.profile?.emergencyContact?.phone || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .patient-profile {
          animation: fadeIn 0.5s ease-in;
        }
        
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .alert {
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .alert-success {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--status-success);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .alert-error {
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--status-error);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .profile-form {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-8);
        }
        
        .form-section {
          margin-bottom: var(--spacing-8);
        }
        
        .section-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-4) 0;
          padding-bottom: var(--spacing-2);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }
        
        .form-actions {
          display: flex;
          gap: var(--spacing-3);
          justify-content: flex-end;
          margin-top: var(--spacing-6);
        }
        
        .spinner {
          border: 2px solid var(--white);
          border-top: 2px solid transparent;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
          margin-right: var(--spacing-2);
        }
        
        .profile-view {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }
        
        .profile-section {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-8);
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-6);
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .info-label {
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--gray-500);
          margin: 0;
        }
        
        .info-value {
          font-size: var(--font-size-base);
          color: var(--gray-800);
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .age-badge {
          background: var(--primary-blue);
          color: var(--white);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .form-text {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-1);
        }
        
        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            gap: var(--spacing-4);
            align-items: stretch;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .profile-form,
          .profile-section {
            padding: var(--spacing-6);
          }
          
          .info-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }
        }
      `}</style>
    </div>
  )
}

export default PatientProfile