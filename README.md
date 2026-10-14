# Health Record System

This repository contains a working prototype of a Health Record System with a React frontend and a simple Flask + MongoDB backend. It is provided as a development prototype and is not production-ready.

## Repository layout

- `src/` — React frontend source (Vite + React 18)
- `index.html`, `package.json`, `vite.config.js` — frontend project files
- `backend/` — Flask backend and utility scripts
  - `backend/app.py` — Flask app entry point
  - `backend/config.py` — DB and auth configuration (default `MONGO_URI`, `JWT_SECRET`)
  - `backend/requirements.txt` — Python dependencies
  - `backend/create_test_users.py` — helper to seed sample admin/doctor users

## Quick start

Prerequisites
- Node.js 16+ and `npm`
- Python 3.10+ (or compatible)
- MongoDB (local or remote)

1) Clone and install frontend deps

```bash
cd "d:\Ekansh  Files\HRS\Health Record"
npm install
```

2) Prepare a Python virtual environment and install backend deps

Windows (PowerShell):

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Linux / macOS:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

3) Configure environment (optional)

Copy `backend/.env.example` to `backend/.env` (or export the variables). No third-party API keys are needed.

| Variable | Default | Purpose |
| --- | --- | --- |
| `MONGO_URI` | `mongodb://localhost:27017/` | MongoDB connection string. Set `mongomock://` to run **without MongoDB** (in-memory, demo users auto-seeded, data lost on restart). |
| `DB_NAME` | `health_record_system` | Database name |
| `JWT_SECRET` | random per run | Secret for signing login tokens. Set a long random value (`python -c "import secrets; print(secrets.token_urlsafe(48))"`); if unset everyone is signed out on each restart. |
| `JWT_EXP_HOURS` | `1` | Token lifetime in hours |
| `CORS_ORIGINS` | `http://localhost:3000` | Comma-separated origins allowed to call the API directly |
| `PORT` | `5000` | Backend port |
| `API_PROXY_TARGET` (frontend) | `http://localhost:5000` | Where the Vite dev server proxies `/api` |

Quick demo without MongoDB:

```bash
cd backend
MONGO_URI=mongomock:// python app.py
```

4) Seed demo users (optional)

```bash
cd backend
python create_test_users.py
```

This script will attempt to insert sample users if they don't already exist:
- Patient: `patient.user@example.com` / `PatientPass123` (role: `patient`)
- Doctor: `doctor.user@example.com` / `DoctorPass123` (role: `doctor`)
- Admin:  `admin.user@example.com`  / `AdminPass123`  (role: `admin`)

5) Run backend and frontend

Run backend (Flask):

```bash
cd backend
python app.py
# Backend will listen on http://0.0.0.0:5000 by default
```

Run frontend (Vite dev server):

```bash
cd "d:\Ekansh  Files\HRS\Health Record"
npm run dev
# Frontend will be available at http://localhost:5173 (or the port printed by Vite)
```

## API highlights

- `POST /api/auth/register` — register a new user (expects `name`, `email`, `password`, optional `role`)
- `POST /api/auth/login` — authenticate and receive a JWT
- `GET /api/users/me` — (protected) fetch current user profile (requires `Authorization: Bearer <token>`)
- `PUT /api/users/me` — (protected) update your own name, email and profile
- `GET /api/health` — simple health endpoint

## What changed in this version (bug & security fixes)

- **Security:** public sign-up can no longer create admin/doctor accounts (always `patient`); removed the unauthenticated `/api/db-test` endpoint that let anyone read/write the database; no more publicly known default JWT secret; every request re-checks the account in the database, so deactivated/deleted users and role changes take effect immediately (role in the token is not trusted); deactivated users can't log in; doctors can only write records for patients they have an appointment with; non-text input (e.g. `{"$ne": ""}`) is rejected; appointment status values are validated; admins can't demote/deactivate themselves; API responses are `Cache-Control: no-store`; CORS restricted to configured origins.
- **Bugs:** profile editing now saves (the `PUT /api/users/me` endpoint was missing) and registration stores DOB/gender/phone/address; the doctor dashboard no longer crashes on patients without visit dates; adding a diagnosis/prescription no longer crashes the record page; doctor names show on patient pages (were raw IDs); seeded doctors appear in the booking list; "New Prescription" and "System Reports" no longer link to non-existent pages; appointment dates no longer shift to the UTC day; the edit-appointment form saves; doctors can mark appointments completed; patients can cancel pending requests; removed `alert()` placeholder buttons and fake "Email/Backup" status rows.

Note: The backend uses MongoDB via `pymongo` and the database and JWT configuration is controlled in `backend/config.py` (or by the environment variables listed above).

## Frontend notes

- The frontend is a Vite + React app located under `src/` using React Router and a small `AuthContext` for authentication state.
- Scripts available in `package.json`: `dev`, `build`, `preview`.

## Security & Production notes

- This project is a prototype. Before any production deployment you should:
  - Harden authentication and rotate `JWT_SECRET`.
  - Use HTTPS and secure CORS configuration.
  - Validate and sanitize all inputs on the backend.
  - Configure a production-grade MongoDB deployment and credentials.
  - Add logging, monitoring, and backup/restore procedures.

## Helpful commands

Frontend:
```bash
npm install
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the built app
```

Backend:
```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python create_test_users.py  # optional seed users
python app.py
```

## Contact / next steps

If you want, I can:
- add a `.env.example` file documenting the environment variables
- add a `Procfile` / docker-compose for easier local orchestration
- run a quick smoke test of frontend ↔ backend endpoints (if you want me to run them here)

---

This README was updated to reflect the actual Flask backend and MongoDB usage present in the `backend/` folder, and to provide accurate run instructions for both frontend and backend.
# Health Record System - Working Prototype

A comprehensive, modern health record management system built as a working prototype using React, featuring role-based access control, appointment management, medical records tracking, and professional healthcare UI/UX design.

## 🎯 Project Overview

This is a **WORKING PROTOTYPE** (not production-ready) of a Health Record System that demonstrates:
- Professional healthcare application design
- Complete role-based navigation and functionality
- Mock CRUD operations with local state
- Responsive, accessible UI/UX
- Modern React architecture with hooks and context

## 🏗️ Architecture

### Frontend Stack
- **React 18** - Modern component-based architecture
- **React Router v6** - Client-side routing and navigation
- **Context API** - State management for authentication and user data
- **CSS Modules** - Scoped styling with healthcare-themed design system
- **Date-fns** - Date manipulation and formatting
- **Font Awesome** - Professional healthcare icons

### Project Structure
```
src/
├── components/          # Reusable UI components
├── contexts/          # React Context for state management
├── pages/            # Page components organized by role
│   ├── auth/         # Authentication pages
│   ├── patient/      # Patient portal pages
│   ├── doctor/       # Doctor portal pages
│   ├── admin/        # Admin portal pages
│   └── appointments/ # Appointment management
├── App.jsx           # Main application with routing
└── main.jsx          # Application entry point
```

## 🎭 Role-Based Access Control

### Patient Role
- **Patient Dashboard** - Personal health overview
- **Profile Management** - Personal information and medical details
- **Medical Records** - Complete medical history with timeline view
- **Appointments** - Book and manage appointments
- **Health Statistics** - Quick health metrics and status

### Doctor Role
- **Doctor Dashboard** - Daily schedule and patient overview
- **Patient Management** - Complete patient list with medical details
- **Medical Records View** - Patient history and diagnosis
- **Prescription Management** - Create and manage prescriptions
- **Appointment Scheduling** - View and manage appointments

### Admin Role
- **Admin Dashboard** - System-wide statistics and overview
- **User Management** - Create, edit, delete users with role assignment
- **System Monitoring** - Basic system status and health indicators
- **Activity Logs** - Recent system activities and user actions

## 📋 Core Features

### Authentication System
- **Login/Register** - Clean, professional authentication interface
- **Role-based Redirect** - Automatic navigation based on user role
- **Session Management** - Mock authentication with local storage
- **Form Validation** - Client-side validation with error handling

### Appointment Management
- **Appointment Booking** - Patient appointment scheduling
- **Status Management** - Pending, approved, cancelled workflow
- **Doctor Assignment** - Automatic doctor assignment by specialization
- **Time Slot Management** - Visual time slot selection
- **Appointment History** - Complete appointment timeline

### Medical Records System
- **Timeline View** - Chronological medical history display
- **Record Creation** - Add new medical records and diagnoses
- **Prescription Management** - Medication tracking and management
- **Allergy Tracking** - Patient allergy information
- **Emergency Contacts** - Critical contact information

### User Management (Admin)
- **User CRUD Operations** - Create, read, update, delete users
- **Role Assignment** - Assign and modify user roles
- **Status Management** - Activate/deactivate user accounts
- **Bulk Operations** - Multiple user management actions

## 🎨 Design System

### Healthcare Theme
- **Professional Color Palette** - Medical blues, greens, and neutrals
- **Accessibility First** - WCAG 2.1 compliant color contrast
- **Responsive Design** - Mobile-first responsive breakpoints
- **Consistent Typography** - Inter font family for readability
- **Icon System** - Healthcare-specific iconography

### UI Components
- **Cards** - Information containers with shadows and rounded corners
- **Badges** - Status indicators with color coding
- **Buttons** - Primary, secondary, success, danger variants
- **Forms** - Consistent form styling with validation states
- **Tables** - Responsive data tables with hover effects
- **Modals** - Overlay dialogs for forms and confirmations

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser with ES6+ support

### Installation
```bash
# Clone or download the project
# Navigate to project directory
cd health-record-system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Demo Credentials
Access the system using these demo accounts:

**Patient Account:**
- Email: `patient@example.com`
- Password: `password123`

**Doctor Account:**
- Email: `doctor@example.com`
- Password: `password123`

**Admin Account:**
- Email: `admin@example.com`
- Password: `password123`

## 📱 Responsive Design

### Mobile First Approach
- **Mobile (320px+)**: Single column layouts, touch-friendly interactions
- **Tablet (768px+)**: Two-column layouts, enhanced navigation
- **Desktop (1024px+)**: Full multi-column layouts, sidebar navigation
- **Large Desktop (1440px+)**: Maximum content width optimization

### Cross-browser Support
- Chrome, Firefox, Safari, Edge
- Mobile Safari, Chrome Mobile
- Progressive Web App capable

## 🔧 Technical Implementation

### State Management
- **AuthContext** - User authentication and profile management
- **Local State** - Component-specific state with useState
- **Mock APIs** - Simulated API calls with setTimeout
- **Local Storage** - Persistent user sessions

### Navigation & Routing
- **Protected Routes** - Role-based route protection
- **Dynamic Routing** - Parameterized routes for patient records
- **Breadcrumb Navigation** - Contextual navigation assistance
- **Error Boundaries** - Graceful error handling

### Form Handling
- **Client Validation** - Real-time form validation
- **Error Messages** - User-friendly error display
- **Success Feedback** - Confirmation messages and toasts
- **Loading States** - Progress indicators during operations

## 🧪 Testing Strategy

### Manual Testing
- **Role-based Navigation** - Verify correct access for each role
- **Form Validation** - Test all form inputs and validation
- **Data Flow** - Verify CRUD operations work correctly
- **Responsive Design** - Test on multiple device sizes

### User Experience Testing
- **Navigation Flow** - Intuitive user journey testing
- **Accessibility** - Keyboard navigation and screen reader testing
- **Performance** - Loading times and interaction responsiveness

## 🚧 Known Limitations

### Prototype Constraints
- **No Real Database** - All data is stored in component state
- **No Authentication** - Mock authentication system
- **No API Integration** - Simulated API calls with timeouts
- **Limited Data** - Small dataset for demonstration purposes

### Future Enhancements
- Real backend integration with database
- File upload functionality for medical documents
- Real-time notifications system
- Advanced reporting and analytics
- Multi-language support
- Integration with medical devices

## 📚 Documentation

### Code Organization
- **Component Documentation** - JSDoc comments for major components
- **Style Guidelines** - Consistent CSS class naming conventions
- **State Management** - Clear separation of concerns
- **Error Handling** - Comprehensive error boundaries and handling

### Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
```bash
# Start development server
npm run dev

# Code goes in src/ directory
# Components are reusable UI elements
# Pages are full page components
# Contexts manage global state
```

## 🤝 Contributing

This is a prototype system designed for demonstration purposes. For production use, consider:
- Implementing real authentication and authorization
- Adding proper database integration
- Implementing comprehensive testing
- Adding security measures (CSP, XSS protection)
- Performance optimization
- Accessibility improvements

## 📄 License

This project is created for demonstration purposes. Please review and adapt according to your specific healthcare compliance requirements (HIPAA, GDPR, etc.).

## 🆘 Support

For questions about this prototype:
1. Review the documentation above
2. Check the code comments and component structure
3. Test with the provided demo credentials
4. Examine the browser console for any errors

---

**Note**: This is a working Full Stack project designed to demonstrate UI/UX concepts and application flow. It is not intended for production use without significant security, performance, and compliance enhancements.