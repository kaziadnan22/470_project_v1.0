import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AdminDashboard from './pages/admin/Dashboard'
import InformerDashboard from './pages/informer/Dashboard'
import AdopterDashboard from './pages/adopter/Dashboard'
import VolunteerDashboard from './pages/volunteer/Dashboard'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin/*" element={<AdminDashboard />} />
          <Route path="informer/*" element={<InformerDashboard />} />
          <Route path="adopter/*" element={<AdopterDashboard />} />
          <Route path="volunteer/*" element={<VolunteerDashboard />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
