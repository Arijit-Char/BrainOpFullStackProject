import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./components/Form/Registration";
import Login from "./components/Form/Login";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Allcontent from "./Allcontent";

function App() {
  useEffect(() => {
    const storedItem = localStorage.getItem("token");

    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);
      const expirationTime = parsedItem.expires;
      if (expirationTime && expirationTime < new Date().getTime()) {
        localStorage.removeItem("token");
      }
    }
  }, []);
  return (
    <Router>


      <Routes>
        <Route path="/" element={<Allcontent />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
