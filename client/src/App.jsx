import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import HomePage  from "./pages/home-page";
import Contact from "./pages/contact-page";
import Messages from "./pages/messages";
import PaymentStepOne from "./pages/paymentStepOne";
import PaymentStepTwo from "./pages/paymentStepTwo";
import PaymentStepThree from "./pages/paymentStepThree";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage  />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/messages" element={<Messages />}/>
      <Route path="/paymentStepOne" element={<PaymentStepOne />}/>
      <Route path="/paymentStepTwo" element={<PaymentStepTwo/>}/>
      <Route path="/paymentStepThree" element={<PaymentStepThree/>}/>     

    </Routes>
    </BrowserRouter>
  );
}

export default App;