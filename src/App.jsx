import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Feature"
import { Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"


function App() {
 

  return (
   <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Features />
          </>
        }
      />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default App
