// ייבוא REACT
// USESTATE הוא זכרון פנימי של הדף ומשתמשים בו כדי לשמור מה שהמשתמש מקליד
import { useState } from "react";
import carImage from "../assets/images/cars/Frame.png";
import backGround from "../assets/hero/Vector.png";
import iconLayer from "../assets/icons/Layer.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // יצירת משתנים ( לטופס)
  // PHONE שומר את מב' הטל ו
  // SETPHONE פונ' שמעדכנת את המספר
  const [phone, setPhone] = useState("");

  // CARNUMBER שומר מספר רכב
  // מעדכן מס' רכב
  const [carNumber, setCarNumber] = useState("");
  const [isAccept,setIsAccepted] = useState(false);

  // פונקציה רצה שלוחצים על כפתור LOGIN
  // אירוע של הטופס 
  // e.preventDefault אל תרענן את הדף כי ברירת מחדל של טופס הוא רענון ולא רוצים האפליקציה
  const navigate = useNavigate();  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN REQUEST");
    try {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },  
      body: JSON.stringify({
        phone,
        carNumber,
      }),
    });
    console.log("FETCH SENT");
    const data = await response.json();
    if (data.user) {
    localStorage.setItem("user", JSON.stringify(data.user));
}
    if (data.redirect === "home") {
    navigate("/home");
  } else {
    navigate("/enrollment");
}
    }catch (error){
      console.log("Login error:",error);
    }
  };

  return (
    <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center",minHeight: "100vh",width: "100%",margin:"0 auto",maxWidth:"12200px"}}>
      <img src={carImage} alt="carImag" style={{ height: "auto", width: "100%", objectFit: "cover" }}/>
      <div className="d-flex justify-content-center align-items-center ">
        <form
          onSubmit={handleLogin}
          style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "15px",width: "90%",maxWidth: "400px",}}>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column">
              <h6 className="text-white text-end "style={{fontSize:"15px"}} >מספר טלפון נייד</h6>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ color:"white",width: "100%",maxWidth:"320px",height:"46px", padding: "12px", borderRadius: "10px", backgroundColor:"#3A3E40",borderRadius:"7px" ,paddingLeft:"16px",paddingRight:"24px",paddingTop:"12px",paddingBottom:"12px"}}
              />
            </div>

            <div>
              <h6 className="text-white text-end" style={{fontSize:"15px"}}>מספר רישוי של הרכב</h6>
              <input
                type="text"
                value={carNumber}
                onChange={(e) => setCarNumber(e.target.value)}
                style={{ color:"white", width: "100%",maxWidth:"320px",height:"46px", padding: "12px", backgroundColor:"#3A3E40",borderRadius:"7px" ,paddingLeft:"16px",paddingRight:"24px",paddingTop:"12px",paddingBottom:"12px"}}
              />
            </div>
            <div className="d-flex flex-column" style={{width:"100%",maxWidth:"320px",fontSize:"12px",gap:"10px"}}>
                <div className="d-flex flex-row align-items-start" style={{width:"236.07px",height:"42px",top:"478px",left:"50px",color:"#A7A9AA"}}>
                    <p style={{margin:"0"}}>
                        ניתן להוסיף לאפליקציה רק רכבים שיובאו ע"י גיאו מוביליטי בע"מ 
                    </p>
                    <img src={iconLayer} alt="iconLayer" style={{width:"13px", height:"13px"}}/>
                </div>
               <div className="d-flex flex-row gap-1 align-items-center" dir="rtl" style={{padding:"8px",paddingLeft:"30px",fontSize:"12px",color:"white",alignItems:"start",width:"240px"}}>
                    <input type="checkbox" className="mt-1" checked={isAccept} onChange={(e)=>setIsAccepted(e.target.checked)}/>
                    <span>אישור</span>
                    <span style={{ textDecoration: "underline" }}>
                         תנאי השימוש
                    </span>
                    <span>באפליקציה</span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" disabled={!isAccept}className="btn btn-primary" style={{backgroundColor:"#FF5800",color:"white",width:"197px",height:"35px",top:"609px",left:"100px",borderRadius:"15px"}}>המשך</button>               
            </div>
            <a href="#" style={{color:"white",paddingTop:"20px"}}>ליצירת קשר </a>
          </div>
        </form>
      </div>
    </div>
  );
}
