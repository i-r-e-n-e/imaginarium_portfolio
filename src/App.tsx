import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { GaussianSplat } from './pages/gaussianSplat'
import { VisionOS } from './pages/visionOS'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gaussianSplat" element={<GaussianSplat/>}/>
        <Route path="/visionOS" element={<VisionOS/>}/>
      </Routes>
    </Router>
  )
}

export default App
