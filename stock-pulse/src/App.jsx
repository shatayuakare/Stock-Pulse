import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

// pages 
import Home from './pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Board from './pages/dashboard/Board'
import Product from './pages/Product'
import Supplier from './pages/Supplier'
import Setting from './pages/dashboard/Setting'


const App = () => {

  const [authUser, setAuthUser] = useAuth()
  setAuthUser(authUser)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to={'/login'} />} >

          <Route path='' element={<Board />} />
          <Route path='setting' element={<Setting />} />

        </Route>

        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={authUser ? <Product /> : <Navigate to={'/login'} />} />
        <Route path='/supplier' element={authUser ? <Supplier /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to={'/'} />} />
        <Route path='/register' element={!authUser ? <Register /> : <Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
