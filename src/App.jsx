import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountGuard from "./components/AccountGuard";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/account"
          element={
            <AccountGuard>
              <Account />
            </AccountGuard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
