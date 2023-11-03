import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Service from './pages/Service'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom';
import Order from './pages/Order'
import Form from './pages/Form/index'
import ChatAI from './pages/ChatAI'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Landing" element={<LandingPage />} />
        <Route path="/AboutUs" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/ChatAI" element={<ChatAI/>} />
        <Route path="/Login" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="/Booking" element={<Form />}/>
        <Route path="/OrderRiwayat" element={<Order />} />

        {/* <AuthContex>
        <Route path="/Booking" element={<Form />} />
        <Route path="/OrderRiwayat" element={<Order />} />
        </AuthContex> */}


      </Routes>

    </>
  )

  // return(
  //   <>
  //   <Login/>
  //   </>
  // )
}

export default App
