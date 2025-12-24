import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Unauthorized from './pages/Unauthorized'

import PatientDashboard from './pages/patient/PatientDashboard'
import PatientProfile from './pages/patient/PatientProfile'
import PatientMedicalRecords from './pages/patient/PatientMedicalRecords'
import PatientAppointments from './pages/patient/PatientAppointments'

import DoctorDashboard from './pages/doctor/DoctorDashboard'
import PatientList from './pages/doctor/PatientList'
import PatientMedicalRecordView from './pages/doctor/PatientMedicalRecordView.jsx'
import PrescriptionForm from './pages/doctor/PrescriptionForm.jsx'

import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'

import AppointmentList from './pages/appointments/AppointmentList'
import BookAppointment from './pages/appointments/BookAppointment.jsx'

import Layout from './components/Layout'

/* -----------------------------
   Protected Route
-------------------------------- */
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

/* -----------------------------
   Role-based Layout Routes
-------------------------------- */
const PatientRoute = ({ children }) => (
  <ProtectedRoute allowedRoles={['patient']}>
    <Layout role="patient">{children}</Layout>
  </ProtectedRoute>
)

const DoctorRoute = ({ children }) => (
  <ProtectedRoute allowedRoles={['doctor']}>
    <Layout role="doctor">{children}</Layout>
  </ProtectedRoute>
)

const AdminRoute = ({ children }) => (
  <ProtectedRoute allowedRoles={['admin']}>
    <Layout role="admin">{children}</Layout>
  </ProtectedRoute>
)

// Role-aware layout wrapper for routes that should render inside Layout
const RoleLayout = ({ children }) => {
  const { user } = useAuth()
  const role = user?.role || null
  return <Layout role={role}>{children}</Layout>
}

/* -----------------------------
   App Routes
-------------------------------- */
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* ---------- Public (NO Layout) ---------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* ---------- Patient Routes ---------- */}
        <Route
          path="/patient/dashboard"
          element={
            <PatientRoute>
              <PatientDashboard />
            </PatientRoute>
          }
        />
        <Route
          path="/patient/profile"
          element={
            <PatientRoute>
              <PatientProfile />
            </PatientRoute>
          }
        />
        <Route
          path="/patient/medical-records"
          element={
            <PatientRoute>
              <PatientMedicalRecords />
            </PatientRoute>
          }
        />
        <Route
          path="/patient/appointments"
          element={
            <PatientRoute>
              <PatientAppointments />
            </PatientRoute>
          }
        />

        {/* ---------- Doctor Routes ---------- */}
        <Route
          path="/doctor/dashboard"
          element={
            <DoctorRoute>
              <DoctorDashboard />
            </DoctorRoute>
          }
        />
        <Route
          path="/doctor/patients"
          element={
            <DoctorRoute>
              <PatientList />
            </DoctorRoute>
          }
        />
        <Route
          path="/doctor/patient-records/:patientId"
          element={
            <DoctorRoute>
              <PatientMedicalRecordView />
            </DoctorRoute>
          }
        />
        <Route
          path="/doctor/prescription/:patientId"
          element={
            <DoctorRoute>
              <PrescriptionForm />
            </DoctorRoute>
          }
        />

        {/* ---------- Admin Routes ---------- */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          }
        />

        {/* ---------- Shared Appointment Routes (render inside role Layout) ---------- */}
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <RoleLayout>
                <AppointmentList />
              </RoleLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments/book"
          element={
            <ProtectedRoute>
              <RoleLayout>
                <BookAppointment />
              </RoleLayout>
            </ProtectedRoute>
          }
        />

        {/* ---------- Default ---------- */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
