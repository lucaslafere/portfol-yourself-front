import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "./Contexts/TokenContext";
import UserDataContext from "./Contexts/UserDataContext";
import SignUpScreen from "./Components/SignUp/SignUpScreen";
import LoginScreen from "./Components/Login/LoginScreen";

export default function App() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({userId: 0});

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<MainScreen />} /> */}
            <Route path="/" element={<SignUpScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            {/* <Route path="/create" element={<CreationScreen />} /> */}
            {/* <Route path="/dashboard" element={<DashboardScreen />} /> */}
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </TokenContext.Provider>
  );
}
