import React from 'react'
import Projects from '../components/Projects'
import Registration from '../components/Registration'
import Attofind from '../components/Attofind'
import Atteandance from '../components/Atteandance'
import Payroll from '../components/Payroll'
import Project from '../components/Project'
import Silder from '../components/Silder'
import { Route, Routes } from 'react-router-dom'
import Addemployee from '../components/Addemployee'
import Addproject from '../components/Addproject'
import Test from '../components/Test'

const AdminRouter = () => {
    return (
        <>
            <Silder >
                <Routes>
                    <Route path='/' element={<Projects />} />
                    <Route path='/att' element={<Attofind />} />
                    <Route path='/attendance' element={<Atteandance />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/payroll' element={<Payroll />} />
                    <Route path='/project/:projectId' element={<Project />} />
                    <Route path='/create' element={<Addemployee />} />
                    <Route path='/addproject' element={<Addproject />} />
                    <Route path='/test' element={<Test />} />
                </Routes>
            </Silder>
        </>
    )
}

export default AdminRouter