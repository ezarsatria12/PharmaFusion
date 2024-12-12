import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import HomePage from "./pages/Home";
import Navbar from "./components/blocks/Navbar";
import PasienPage from "./pages/Pasien";
import Footer from "./components/blocks/Footer";
import { useLocation } from "react-router-dom";
import RegisterPage from "./pages/Register";
import UserSetting from "./pages/UserSetting";
import Sidebar from "./components/blocks/Sidebar";

function App() {
  const location = useLocation();
  const showNavbarFooter = ["/",].includes(location.pathname);
  const showSidebar = ["/pasien", "/user-setting"].includes(location.pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      {showSidebar &&
        <Sidebar>
          <Routes>
            <Route path="/pasien" element={<PasienPage />} />
            <Route path="/user-setting" element={<UserSetting />} />
          </Routes>
        </Sidebar>
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  )
}

export default App
