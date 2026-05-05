import { useState } from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/Home'
import AboutUs from './component/AboutUs.jsx'
import Services from './component/services.jsx'
import WaterManagement from './component/Water-management.jsx'
import SignUp from './Log_reg/SignUp.jsx'
import LogIn from './Log_reg/LogIn.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState('True')


  return (
    <>
<Router>
  <Header />

  <div style={{ marginTop: '60px' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/water" element={<WaterManagement />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </div>

  <Footer />
</Router>
    </>
  )
}

export default App
//  {/* there are write the code  for the Download the app */}
