import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import HomePage  from "./pages/home-page";
import Contact from "./pages/contact-page";
import Messages from "./pages/messages";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage  />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/messages" element={<Messages />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;