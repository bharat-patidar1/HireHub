import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
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
import CheckAuthentication from './components/CheckAuthentication'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/signup'} element={<Signup />}></Route>
        <Route path={'/profile'} element={<Profile />}></Route>
        <Route path={'/jobs'} element={<CheckAuthentication><Jobs /></CheckAuthentication>}></Route>
        <Route path={'/browse'} element={<CheckAuthentication><Browse /></CheckAuthentication>}></Route>
        <Route path={'/description/:id'} element={<CheckAuthentication><JobDescription /></CheckAuthentication>}></Route>
        {/* for admin */}
        <Route path={'/admin/companies'} element={<CheckAuthentication><Companies /></CheckAuthentication>}></Route>
        <Route path={'/admin/companies/create'} element={<CheckAuthentication><CompanyCreate /></CheckAuthentication>}></Route>
        <Route path={'/admin/companies/:id'} element={<CompanySetup />}></Route>
        {/* for jobs posted by admin */}
        <Route path='/admin/jobs' element={<CheckAuthentication><AdminJobs/></CheckAuthentication>}></Route>
        <Route path='/admin/jobs/create' element={<CheckAuthentication><JobCreate/></CheckAuthentication>}></Route>
        <Route path='/admin/jobs/:id/applicants' element={<CheckAuthentication><Applicants/></CheckAuthentication>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
