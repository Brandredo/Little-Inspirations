/* CSS */
import "../src/CSS/App.css";

/* PAGES */
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* Hooks, Components & Other */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import AltNavbar from "./components/AltNavbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/ResetPassword";
import UserContext from "./content/forUserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App body-container">
      <BrowserRouter>
        {/* load the navigation bar */}


        <UserContext.Provider value={{ user, setUser }}>

          {user == null ? <Navbar className="navigation-section" /> : <AltNavbar className="navigation-section" />}

          <div className="main-section">
            <Routes>
              {/* different routes of this application */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
          </div>

          <div className="spaced-footer"></div>

          <Footer className="footer-section" />
          <ToastContainer />

        </UserContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
