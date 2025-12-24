import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const UserManagement = () => {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [formState, setFormState] = useState({ name: '', email: '', role: 'patient', status: 'active', password: '' })
  const [formErrors, setFormErrors] = useState({})

  // Data loaded from API (admin only)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch('/api/users', { headers: { Authorization: `Bearer ${token}` } })
        const data = await res.json()
        if (res.ok && Array.isArray(data.users)) {
          const mapped = data.users.map(u => ({ id: u._id, name: u.name || '', email: u.email, role: u.role, status: u.status || 'active', createdAt: u.createdAt || '', lastLogin: u.lastLogin || '' }))
          setUsers(mapped)
        } else {
          setUsers([])
        }
      } catch (e) {
        console.error('Failed to fetch users', e)
        setUsers([])
      }
      setLoading(false)
    }
    fetchUsers()
  }, [])

  const handleEditUser = (user) => {
    setEditingUser(user)
    setFormState({ name: user.name, email: user.email, role: user.role, status: user.status, password: '' })
    setFormErrors({})
    setShowModal(true)
  }

  const handleDeleteUser = (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        const res = await fetch(`/api/users/${userId}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
        if (res.ok) {
          setUsers(users.filter(u => u.id !== userId))
        } else {
          const d = await res.json()
          alert(d.error || 'Failed to delete user')
        }
      } catch (e) {
        console.error('Delete failed', e)
        alert('Network error')
      }
    })()
  }

  const handleToggleStatus = (userId) => {
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      const u = users.find(x => x.id === userId)
      if (!u) return
      const newStatus = u.status === 'active' ? 'inactive' : 'active'
      try {
        const res = await fetch(`/api/users/${userId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ status: newStatus }) })
        if (res.ok) {
          const data = await res.json()
          setUsers(users.map(x => x.id === userId ? { ...x, status: data.user.status || newStatus } : x))
        } else {
          const d = await res.json()
          alert(d.error || 'Failed to update status')
        }
      } catch (e) {
        console.error('Toggle failed', e)
        alert('Network error')
      }
    })()
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const errs = {}
    if (!formState.name) errs.name = 'Name is required'
    if (!formState.email || !/\S+@\S+\.\S+/.test(formState.email)) errs.email = 'Valid email required'
    if (!editingUser && !formState.password) errs.password = 'Password is required for new user'
    setFormErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSaveUser = () => {
    if (!validateForm()) return
    ;(async () => {
      const token = localStorage.getItem('healthRecordToken')
      try {
        if (editingUser) {
          const res = await fetch(`/api/users/${editingUser.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify({ name: formState.name, email: formState.email, role: formState.role, status: formState.status }) })
          const d = await res.json()
          if (res.ok) {
            setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...d.user } : u))
          } else {
            alert(d.error || 'Failed to update')
          }
        } else {
          const body = { email: formState.email, password: formState.password, role: formState.role, name: formState.name }
          const res = await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) })
          const d = await res.json()
          if (res.ok) {
            const newUser = { id: d.user._id, name: d.user.name, email: d.user.email, role: d.user.role, status: d.user.status || 'active', createdAt: d.user.createdAt || new Date().toISOString(), lastLogin: d.user.lastLogin || '' }
            setUsers([newUser, ...users])
          } else {
            alert(d.error || 'Failed to create user')
          }
        }
      } catch (e) {
        console.error('Save user failed', e)
        alert('Network error')
      }
      setShowModal(false)
      setEditingUser(null)
      setFormState({ name: '', email: '', role: 'patient', status: 'active', password: '' })
    })()
  }

  const getRoleBadge = (role) => {
    switch (role) {
      case 'admin':
        return <span className="badge badge-error">Admin</span>
      case 'doctor':
        return <span className="badge badge-success">Doctor</span>
      case 'patient':
        return <span className="badge badge-info">Patient</span>
      default:
        return <span className="badge badge-secondary">{role}</span>
    }
  }

  const getStatusBadge = (status) => {
    return status === 'active' 
      ? <span className="badge badge-success">Active</span>
      : <span className="badge badge-error">Inactive</span>
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="user-management">
      <div className="page-header">
        <h1 className="page-title">User Management</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-plus"></i>
          Add User
        </button>
      </div>

      <div className="users-container">
        <div className="users-table">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Last Login</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="user-name">{user.name}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{getRoleBadge(user.role)}</td>
                  <td>{getStatusBadge(user.status)}</td>
                  <td>{formatDate(user.createdAt)}</td>
                  <td>{formatDate(user.lastLogin)}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleEditUser(user)}
                        title="Edit User"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleToggleStatus(user.id)}
                        title={user.status === 'active' ? 'Deactivate' : 'Activate'}
                      >
                        <i className={`fas fa-${user.status === 'active' ? 'pause' : 'play'}`}></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteUser(user.id)}
                        title="Delete User"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {editingUser ? 'Edit User' : 'Add New User'}
              </h2>
              <button 
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="modal-body">
              <form className="user-form" onSubmit={(e) => { e.preventDefault(); handleSaveUser() }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.name ? 'error' : ''}`}
                    placeholder="Enter full name"
                    name="name"
                    value={formState.name}
                    onChange={handleFormChange}
                  />
                  {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className={`form-control ${formErrors.email ? 'error' : ''}`}
                    placeholder="Enter email address"
                    name="email"
                    value={formState.email}
                    onChange={handleFormChange}
                  />
                  {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Role</label>
                    <select className="form-select" name="role" value={formState.role} onChange={handleFormChange}>
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Status</label>
                    <select className="form-select" name="status" value={formState.status} onChange={handleFormChange}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                {!editingUser && (
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${formErrors.password ? 'error' : ''}`}
                      placeholder="Enter password"
                      name="password"
                      value={formState.password}
                      onChange={handleFormChange}
                    />
                    {formErrors.password && <div className="error-message">{formErrors.password}</div>}
                  </div>
                )}
              </form>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => { setShowModal(false); setEditingUser(null); setFormErrors({}) }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleSaveUser()}
              >
                {editingUser ? 'Update User' : 'Create User'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .user-management {
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
        
        .users-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .users-table {
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
        
        .user-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }
        
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-xs);
        }
        
        .user-name {
          font-weight: 500;
          color: var(--gray-800);
        }
        
        .action-buttons {
          display: flex;
          gap: var(--spacing-2);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: var(--spacing-4);
        }
        
        .modal-content {
          background: var(--white);
          border-radius: var(--radius-xl);
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-xl);
        }
        
        .modal-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
        }
        
        .modal-body {
          padding: var(--spacing-6);
        }
        
        .modal-footer {
          padding: var(--spacing-6);
          border-top: 1px solid var(--gray-200);
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-3);
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: var(--font-size-xl);
          color: var(--gray-400);
          cursor: pointer;
          padding: var(--spacing-1);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        
        .close-button:hover {
          background-color: var(--gray-100);
          color: var(--gray-600);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default UserManagement