import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './Pages/home'
import { GaussianSplat } from './Pages/gaussianSplat'
import { VisionOS } from './Pages/visionOS'

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
