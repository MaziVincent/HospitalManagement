
import Home from './components/home/Home'
import Layout from './components/shared/Layout'
import About from './components/About'
import Contacts from './components/Contacts'
import Services from './components/Services'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='services' element={<Services />} />
          <Route index element={<Home />} />

        </Route>


      </Routes>
      
      
    </>
  )
}

export default App
