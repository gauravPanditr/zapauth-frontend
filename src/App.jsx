import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Feature"
import { Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import ProtectedRoute from "./pages/ProtectedRoute"
import Projects from "./pages/Projects"
import CreateProject from "./pages/CreateProject"
import Account from "./pages/Account"


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
      <Route path="/login" element={<Login/>}/>

      <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
          <Route path="/account" element={<Account/>}/>
          <Route path="/create" element={<CreateProject />} />
    </Routes>
  )
}

export default App
