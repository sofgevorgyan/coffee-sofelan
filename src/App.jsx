import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { routeArray } from './entities/routeArray'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Routes>
        {routeArray.map((route) => (
          <Route key = {route.path} path = {route.path} element = {route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
