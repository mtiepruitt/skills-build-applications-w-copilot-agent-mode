import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logoUrl from '../../../docs/octofitapp-small.png'
import { apiBaseUrl } from './api'
import './App.css'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

const navItems = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/users" aria-label="OctoFit Tracker home">
          <img src={logoUrl} alt="OctoFit Tracker" />
          <span>OctoFit Tracker</span>
        </NavLink>

        <nav className="nav nav-pills app-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} className="nav-link" to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <div className="api-banner">
          <span>API</span>
          <code>{apiBaseUrl}</code>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
