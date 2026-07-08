import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./hadohome/Navbar";
import Hero from "./hadohome/Home";
import Services from "./hadohome/Services";
import About from "./hadohome/About";
import Stats from "./hadohome/Stats";
import Contact from "./hadohome/Contact";
import Footer from "./hadohome/Footer";
import ContactPage from "./hadohome/ContactPage";

import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import Dashboard from "./Dashboards/Dashboard";
// import ContactPage from "./hadohome/ContactPage";

// Protected Route Component
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

// Home Page Layout
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

       
          <Services />
        {/* </section> */}

       
          <About />
        {/* </section> */}

        <Stats />

        
          <Contact />
        
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full  text-slate-200 font-sans antialiased selection:bg-cyan-500 selection:text-slate-900 scroll-smooth relative ">

        {/* Background Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}