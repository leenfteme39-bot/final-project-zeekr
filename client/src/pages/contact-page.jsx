import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import steps from "../assets/icons/steps.png";
import uplIcon from "../assets/icons/uplIcon.png";
export default function Contact() {
  return (
    <div style={{
          backgroundImage: `url(${backGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "360px",
        }}>
      <div>
        <div
          className="d-flex align-items-center flex-row justify-content-around"
          dir="rtl"
          style={{ backgroundColor: "#24292B", height: "70px" }}
        >
          <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
          <h3 style={{ color: "white" }}>הרשמה לשירות </h3>
          <img
            src={backIcon}
            alt=""
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
      <img src={steps} alt="" />
      <h4 style={{color:"white",fontSize:"15px"}} className="d-flex justify-content-end ">כדאי לבדוק שוב שהפרטים נכונים </h4>
      <form>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}} >שם פרטי</h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>שם משפחה </h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="text" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>תעודת זהות</h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="text" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>תאריך לידה </h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="date" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>מספר טלפון </h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="tel" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>כתובת מייל </h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="email" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>עיר מגורים </h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="text" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>רחוב</h6>
          <input style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="text" />
        </div>
        <div className="d-flex flex-column align-items-end p-2">
          <h6 style={{color:"white"}}>מספר בית</h6>
          <input  style={{backgroundColor:"#3A3E40",width:"100%",borderRadius:"8px",height:"30px"}} type="text"  type="text" />
        </div>
        <div className="d-flex flex-column align-items-end text-end p-2">
          <h5 style={{color:"white",fontSize:"15px"}}>איך לעדכן פרטים </h5>
          <p style={{color:"white"}}>מייל וכתובת ע"י לחיצה על העיפרון.<br/> שם ,ת.ז תאריך לידה וטלפון ע"י צילום רישיון הנהיגה</p>
        </div>
        <div dir="rtl" className="d-flex flex-row align-items-end p-2" style={{border:"2px dotted #6A6B70",width:"300px",height:"50px",borderRadius:"20px"}} >
          <img src={uplIcon} alt=""className="" />
          <h4 style={{color:"white",fontSize:"15px"}}className="justify-content-between">צילום רישיון נהיגה</h4>
        </div>
        <button style={{backgroundColor:"#FF5800",height:"35px",borderRadius:"10px",width:"250px",color:"white"}}> קדימה </button>
      </form>  
    </div>
  );
}
