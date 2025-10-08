import React from "react"
import { Routes, Route } from "react-router"
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx"
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen.jsx"
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx"

function App() {
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/home" element={<HomeScreen/>} />
      </Routes>
    </div>
  )
}

export default App
