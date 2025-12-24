import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [role, setRole] = useState('patient')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
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
    
    try {
      const result = await login(formData.email, formData.password)
      
        if (result.success) {
        // Ensure selected role matches the account role for demo clarity
        if (role && result.user.role !== role) {
          setErrors({ general: `Selected role does not match account role (${result.user.role}).` })
          setLoading(false)
          return
        }
          try { const { showToast } = await import('../../utils/toast'); showToast({ type: 'success', message: 'Signed in successfully' }) } catch(e) {}
        // Redirect based on role
        switch (result.user.role) {
          case 'patient':
            navigate('/patient/dashboard')
            break
          case 'doctor':
            navigate('/doctor/dashboard')
            break
          case 'admin':
            navigate('/admin/dashboard')
            break
          default:
            navigate('/login')
        }
      } else {
        setErrors({ general: result.error })
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <i className="fas fa-heartbeat"></i>
            <h1>Health Record System</h1>
          </div>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {errors.general && (
            <div className="alert alert-error">
              <i className="fas fa-exclamation-circle"></i>
              {errors.general}
            </div>
          )}
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Role</label>
            <select
              name="role"
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={loading}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="form-group">
            <label className="checkbox-container">
              <input type="checkbox" name="remember" />
              <span className="checkmark"></span>
              Remember me
            </label>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-lg"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <div className="spinner" aria-hidden="true"></div>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
          <p className="demo-credentials">
            <strong>Demo Credentials (seeded):</strong><br/>
            Patient: patient.user@example.com / PatientPass123 (role: patient)<br/>
            Doctor: doctor.user@example.com / DoctorPass123 (role: doctor)<br/>
            Admin: admin.user@example.com / AdminPass123 (role: admin)<br/>
            <em>Run <code>python backend/create_test_users.py</code> to seed these accounts.</em>
          </p>
        </div>
      </div>
      
      <style>{`
        /* Consolidated login styles: visibility, centering, responsive */
        .auth-container {
          min-height: 100dvh;
          min-height: 100vh; /* fallback for browsers that don't support dvh */
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-blue-light) 0%, rgba(255,255,255,0.85) 100%);
          padding: 0 var(--spacing-4);
          z-index: 50;
        }

        .auth-card {
          width: 100%;
          max-width: 520px;
          padding: var(--spacing-8) var(--spacing-6);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
          box-shadow: var(--shadow-xl);
          border-radius: var(--radius-xl);
          background: var(--white);
        }

        .auth-header { text-align: center; margin-bottom: var(--spacing-6); }
        .auth-logo { display:flex; align-items:center; justify-content:center; gap:var(--spacing-2); }
        .auth-logo i { font-size: var(--font-size-3xl); color: var(--primary-blue); }
        .auth-logo h1 { font-size: var(--font-size-2xl); font-weight:700; color:var(--gray-800); margin:0; }
        .auth-subtitle { color: var(--gray-500); font-size: var(--font-size-base); margin:0; }

        .auth-form { width:100%; display:flex; flex-direction:column; gap:var(--spacing-4); }
        .auth-form .form-group { width:100%; }

        .alert { padding: var(--spacing-3) var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4); display:flex; align-items:center; gap:var(--spacing-2); }
        .alert-error { background-color: rgba(239,68,68,0.07); color: var(--status-error); border: 1px solid rgba(239,68,68,0.12); }

        .checkbox-container { display:flex; align-items:center; gap:var(--spacing-2); cursor:pointer; font-size: var(--font-size-sm); color:var(--gray-600); }
        .checkmark { width:16px; height:16px; border:2px solid var(--gray-300); border-radius: var(--radius-sm); position:relative; }
        input[type="checkbox"]:checked + .checkmark { background: var(--primary-blue); border-color: var(--primary-blue); }
        input[type="checkbox"]:checked + .checkmark::after { content: '✓'; position:absolute; top:-2px; left:2px; color:var(--white); font-size:12px; }

        .spinner { border:2px solid rgba(255,255,255,0.7); border-top:2px solid rgba(255,255,255,1); border-radius:50%; width:16px; height:16px; animation: spin 0.9s linear infinite; margin-right: var(--spacing-2); }

        .auth-footer { text-align:center; color:var(--gray-500); font-size:var(--font-size-sm); }
        .auth-footer a { color: var(--primary-blue-dark); text-decoration:none; font-weight:500; }
        .auth-footer a:hover { text-decoration: underline; }

        .demo-credentials { margin-top: var(--spacing-4); padding: var(--spacing-3); background-color: var(--gray-50); border-radius: var(--radius-md); font-size: var(--font-size-xs); text-align:left; border:1px solid var(--gray-200); }

        @media (max-width: 992px) {
          .auth-card { max-width: 480px; }
        }

        @media (max-width: 768px) {
          .auth-card { max-width: 100%; padding: var(--spacing-6); }
          .auth-form .btn { width:100%; }
          .auth-container { padding: 0 var(--spacing-2); }
        }
      `}</style>
    </div>
  )
}

export default Login