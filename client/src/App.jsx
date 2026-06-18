import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./pages/login-page";
import HomePage  from "./pages/home-page";
import Enrollment from "./pages/enrollmentPage";
import Messages from "./pages/messages";
import PaymentStepOne from "./pages/paymentStepOne";
import PaymentStepTwo from "./pages/paymentStepTwo";
import PaymentStepThree from "./pages/paymentStepThree";
import CarDetails from "./pages/carDetailsPage";
import Map from "./pages/map";
import UploadDocuments from "./pages/uploadDocuments";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage  />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/enrollment" element={<Enrollment />}/>
      <Route path="/messages" element={<Messages />}/>
      <Route path="/paymentStepOne" element={<PaymentStepOne />}/>
      <Route path="/paymentStepTwo" element={<PaymentStepTwo/>}/>
      <Route path="/paymentStepThree" element={<PaymentStepThree/>}/>     
      <Route path="/carDetails" element={<CarDetails/>}/>     
      <Route path="/map" element={<Map/>}/>     
      <Route path="/uploadDocuments" element={<UploadDocuments/>}/>     

    </Routes>
    </BrowserRouter>
  );
}

export default App;