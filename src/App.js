import React from "react";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Review from "./components/Review";

import Pasien from "./components/Pasien";
import SignUp from "./components/SignUp";


import "./index.css";

function App() {
  return (
    <div>
      {/* <Dashboard /> */}
      

      <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/review" element={<Review />}></Route>
      <Route path="/pasien" element={<Pasien />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>


      </Routes>
     
      
      

    </div>
  );
}

export default App;
