import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./Contexts/TokenContext";
import UserDataContext from "./Contexts/UserDataContext";
import SignUpScreen from "./Pages/SignUp";
import LoginScreen from "./Pages/Login";
import MainScreen from "./Pages/MainPage";
import CreationScreen from "./Pages/Creation";
import DashboardScreen from "./Pages/Dashboard";
import AddItemScreen from "./Pages/AddItem";
import PortfolioScreen from "./Pages/Portfolio";

export default function App() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({ userId: 0 });

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/create" element={<CreationScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/add" element={<AddItemScreen />} />
            <Route
              path="/portfolio/:portfolioId"
              element={<PortfolioScreen />}
            />
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </TokenContext.Provider>
  );
}
