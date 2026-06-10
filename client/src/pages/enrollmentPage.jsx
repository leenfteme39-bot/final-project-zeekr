import { useState } from "react";
import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import steps from "../assets/icons/steps.png";
import uplIcon from "../assets/icons/uplIcon.png";
import updIcon from "../assets/icons/icon8.png";

export default function Enrollment() {
  const [city,setCity]=useState("");
  const [street,setStreet]=useState("");
  const [houseNumber,setHouseNumber]=useState("");
  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    idNumber:"",
    birthDate: "",
    phone:"" ,
    email:"",
    city:"",
    street:"",
    houseNumber:"",
  });
  const handleChange =(e)=>{
    setFormData({
      formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
          const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }
     alert("נרשמת בהצלחה 🎉");
    console.log(data.user);

    navigate("/login");
    } catch (error) {
    console.log(error);
  }
};
  return (
    <div
      style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center",maxheight: "100%",width: "100%",margin:"0 auto"}}>
      <div className="d-flex align-items-center flex-row justify-content-around"dir="rtl"style={{ backgroundColor: "#24292B", height: "70px" }}>
        <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
        <h3 style={{ color: "white" }}>הרשמה לשירות </h3>
        <img src={backIcon} alt="" style={{ width: "40px", height: "40px" }} />
      </div>
      <img src={steps} alt="" style={{ padding: "10px",width:"100%" }} />
      <h4 style={{ color: "white", fontSize: "15px", padding: "10px" }}className="d-flex justify-content-end ">
        כדאי לבדוק שוב שהפרטים נכונים
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>שם פרטי</h6>
          <input style={{backgroundColor: "#3A3E40",width: "100%",borderRadius: "8px",height: "30px",}}type="text" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>שם משפחה</h6>
          <input
            style={{backgroundColor: "#3A3E40",width: "100%",borderRadius: "8px",height: "30px",}}type="text" value={formData.lastName} onChange={handleChange}/>
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>תעודת זהות</h6>
          <input style={{backgroundColor: "#3A3E40",width: "100%",borderRadius: "8px",height: "30px",}}type="text" value={formData.idNumber} onChange={handleChange}/>
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>תאריך לידה</h6>
          <input style={{backgroundColor: "#3A3E40",width: "100%",borderRadius: "8px",height: "30px",color: "white",}}type="date" value={formData.birthDate} onChange={handleChange}/>
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>מספר טלפון</h6>
          <input
            style={{backgroundColor: "#3A3E40",width: "100%",borderRadius: "8px",height: "30px",}}type="tel" value={formData.idNumber} onChange={handleChange}/>
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>כתובת מייל</h6>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="email"
              style={{backgroundColor: "#3A3E40",width: "100%",borderRadius: "8px",height: "30px",border: "none",outline: "none",color: "white",paddingRight: "10px",paddingLeft: "35px",}} value={formData.email} onChange={handleChange}/>
            <img src={updIcon} alt="" style={{position: "absolute",left: "10px",top: "50%",transform: "translateY(-50%)",width: "16px",height: "16px"}}/>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>עיר מגורים</h6>
          <div
            style={{backgroundColor: "#3A3E40",width: "100%", borderRadius: "8px",height: "30px"}}>
            <select style={{ backgroundColor: "#3A3E40", color: "white", width: "95%" }} dir="rtl" className="border-0" value={formData.city} onChange={handleChange}>
              <option value=""></option>
              <option value="באקה אלגרבייה">באקה אלגרבייה</option>
              <option value="תל אביב">תל אביב</option>
              <option value="חיפה">חיפה</option>
              <option value="חדרה">חדרה</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>רחוב</h6>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="email"
              style={{
                backgroundColor: "#3A3E40",
                width: "100%",
                borderRadius: "8px",
                height: "30px",
                border: "none",
                outline: "none",
                color: "white",
                paddingRight: "10px",
                paddingLeft: "35px",
              }}value={formData.street} onChange={handleChange}
            />
            <img
              src={updIcon}
              alt=""
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
              }}
            />
          </div>
        </div>

        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{ color: "white" }}>מספר בית</h6>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type="email"
              style={{
                backgroundColor: "#3A3E40",
                width: "100%",
                borderRadius: "8px",
                height: "30px",
                border: "none",
                outline: "none",
                color: "white",
                paddingRight: "10px",
                paddingLeft: "35px",
              }}value={formData.houseNumber} onChange={handleChange}
            />
            <img
              src={updIcon}
              alt=""
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
              }}
            />
          </div>
        </div>

        <div className="d-flex flex-column align-items-end text-end p-2">
          <h5 style={{ color: "white", fontSize: "15px" }}>איך לעדכן פרטים</h5>
          <p style={{ color: "white" }}>
            מייל וכתובת ע"י לחיצה על העיפרון.
            <br />
            שם ,ת.ז תאריך לידה וטלפון ע"י צילום רישיון הנהיגה
          </p>
        </div>

        <div className="d-flex flex-column align-items-center" style={{ gap: "40px", height: "150px" }}>
          <div
            dir="rtl"
            className="d-flex flex-row align-items-end p-2"
            style={{
              gap: "20px",
              border: "2px dotted #6A6B70",
              width: "300px",
              height: "50px",
              borderRadius: "20px",
            }}
          >
            <img src={uplIcon} alt="" />
            <h4 style={{ color: "white", fontSize: "15px" }}>צילום רישיון נהיגה</h4>
          </div>

          <button
            style={{
              paddingTop: "5px",
              backgroundColor: "#FF5800",
              height: "35px",
              borderRadius: "10px",
              width: "250px",
              color: "white",
            }}
          >
            קדימה
          </button>
        </div>
      </form>
    </div>
  );
}