import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { Home } from './components/Home'
import { Signup } from './components/auth/Signup'
import Profile from './components/Profile'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import JobCreate from './components/admin/JobCreate'
import Applicants from './components/admin/Applicants'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/signup'} element={<Signup />}></Route>
        <Route path={'/profile'} element={<Profile />}></Route>
        <Route path={'/jobs'} element={<Jobs />}></Route>
        <Route path={'/browse'} element={<Browse />}></Route>
        <Route path={'/description/:id'} element={<JobDescription />}></Route>
        {/* for admin */}
        <Route path={'/admin/companies'} element={<Companies />}></Route>
        <Route path={'/admin/companies/create'} element={<CompanyCreate />}></Route>
        <Route path={'/admin/companies/:id'} element={<CompanySetup />}></Route>
        {/* for jobs posted by admin */}
        <Route path='/admin/jobs' element={<AdminJobs/>}></Route>
        <Route path='/admin/jobs/create' element={<JobCreate/>}></Route>
        <Route path='/admin/jobs/:id/applicants' element={<Applicants/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
