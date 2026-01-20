import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Feature";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import Account from "./pages/Account";
import Authentication from "./pages/Authentication";
import ProjectSettings from "./pages/ProjectSettings";

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

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      {/* ✅ ADD THIS */}
      <Route
        path="/console/projects/:projectId/authentication"
        element={
          <ProtectedRoute>
            <Authentication />
          </ProtectedRoute>
        }
      />
<Route
  path="/console/projects/:projectId/settings"
  element={
    <ProtectedRoute>
      <ProjectSettings />
    </ProtectedRoute>
  }
/>

      <Route path="/account" element={<Account />} />
      <Route path="/create" element={<CreateProject />} />
    </Routes>
  );
}

export default App;
