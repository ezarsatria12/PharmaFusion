import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import HomePage from "./pages/Home";
import Navbar from "./components/blocks/Navbar";
import PasienPage from "./pages/Pasien";
import Footer from "./components/blocks/Footer";
import { useLocation } from "react-router-dom";
import RegisterPage from "./pages/Register";

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pasien" element={<PasienPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}

    </>
  )
}

export default App
