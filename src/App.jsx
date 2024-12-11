import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import HomePage from "./pages/Home";
import Navbar from "./components/blocks/Navbar";
import PasienPage from "./pages/Pasien";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pasien" element={<PasienPage />} />
      </Routes>
    </>
  )
}

export default App
