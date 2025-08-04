import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/public/Home'
import './App.css'

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Layout>
    </Router>
  )
  
}

export default App;