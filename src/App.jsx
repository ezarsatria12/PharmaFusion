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
import TeamPage from "./pages/Team";
import ReviewPage from "./pages/Review";
import ResetPasswordPage from "./pages/ResetPassword";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from "./utils/AuthProvider";
import { Toaster } from "@/components/ui/toaster"

function App() {
  const location = useLocation();
  const showNavbarFooter = ["/", "/team", "/review"].includes(location.pathname);
  const showSidebar = ["/pasien", "/user-setting"].includes(location.pathname);

  return (
    <AuthProvider>
      {showNavbarFooter && <Navbar />}
      {showSidebar &&
        <Sidebar>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/pasien" element={<PasienPage />} />
              <Route path="/user-setting" element={<UserSetting />} />
            </Route>
          </Routes>
        </Sidebar>
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
      {showNavbarFooter && <Footer />}
      <Toaster />
    </AuthProvider>
  )
}

export default App
