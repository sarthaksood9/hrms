import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Silder from './components/Silder';
import Newcompo from './components/Newcompo';
import Payroll from './components/Payroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/Project';

import Atteandance from './components/Atteandance';
import Registration from './components/Registration';
import Attofind from './components/Attofind';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Silder >
        <Routes>
          <Route path='/' element={<Projects />} />
          <Route path='/login' element={<Registration />} />
          <Route path='/att' element={<Attofind />} />
          <Route path='/attendance' element={<Atteandance />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/payroll' element={<Payroll />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Silder>
      {/* <Registration/> */}
    </BrowserRouter>
  );
}

export default App;
