import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/public/Home'
import Projects from './pages/public/Projects'
import ProjectGrid from './components/projects/ProjectGrid/'
import ProjectDetail from './components/projects/ProjectDetail/'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Navigate to="/home"/>} />
          <Route path='home' element={<Home/>} />

          <Route path='projects' element={<Projects/>} >
            <Route index element={<ProjectGrid/>} />
            <Route path=":slug" element={<ProjectDetail/>} />
          </Route>
          {/* <Route path='about' element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  )
  
}

export default App;