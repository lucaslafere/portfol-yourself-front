import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./Contexts/TokenContext";
import UserDataContext from "./Contexts/UserDataContext";

export default function App() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </TokenContext.Provider>
  );
}
