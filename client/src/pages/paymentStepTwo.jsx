import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import uplIcon from "../assets/icons/uplIcon.png"
import React from "react";
import { useState } from "react";
import closeIcon from "../assets/icons/closeIcon.png";
import motorsbaam from "../assets/logos/motorsbaam.png";
import step2 from "../assets/icons/steps2.png";
import { useNavigate } from "react-router-dom";
export default function PaymentStepTwo(){
    const navigate =useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        navigate("/paymentStepThree")
    };
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    };
    return(
        <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center"}}>
            <div className="d-flex align-items-center flex-row justify-content-around" dir="rtl" style={{ backgroundColor: "#24292B", height: "70px" }}>
                <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
                <h3 style={{ color: "white" }}>ביצוע תשלום</h3>
                <img src={backIcon}alt=""style={{ width: "40px", height: "40px" }}/>
            </div>
            <div style={{textAlign:"center"}}>
                <img src={step2} alt="" style={{width:"80%",height:"auto",transform:"translateY(10px)"}}/>
            </div>
            <div className="d-flex flex-column "style={{padding:"10px",textAlign: "right"}} dir="rtl">
                <p style={{color:"white",fontSize:"15px",transform:"translateY(20px)"}} className="">צירוף אישור תשלום</p>
                <p style={{color:"white",fontSize:"10px",transform:"translateY(20px)"}}>כאן ניתן להעלות את מסמך העברה בנקאית שביצעת מול הבנק</p>
                <p style={{gap:"10px",color:"white",fontSize:"10px",transform:"translateY(20px)"}}>*כאן אפשר להעלות את אישור ההעברה הבנקאית. קובץ אחד בכל ההעלאה בבקשה.</p>
            </div>
             <div dir="rtl" style={{padding:"20px"}}>
                <input type="file" style={{display:'none'}} id="fileUpload" onChange={handleFileChange}/>         
                <label htmlFor="fileUpload" dir="rtl" className="d-flex flex-row align-items-center p-2" style={{gap:"12px",border:"2px dotted #6A6B70",width:"100%",borderRadius:"20px",padding:"12px"}} >
                    <img src={uplIcon} alt=""className="" />
                    <h4 style={{color:"white",fontSize:"15px"}}>להעלאת שם מסמך</h4>
                </label>
                {file &&(
                    <div style={{marginTop: "10px",border: "1px solid #6A6B70",padding: "10px",borderRadius: "10px",width: "90%",color: "white",}}className="d-flex flex-row justify-content-between align-items-center ">
                        <span>{file.name}</span>
                        <img src={closeIcon} alt="" style={{width:"20px",height:"15px"}} onClick={()=>deleteField(null)}/>                        
                    </div>    
                )}
                <h3 style={{color:"white",fontSize:"13px",padding:"10px",marginLeft:"130px"}}>ריכזנו עבורך את פרטי המוטב </h3>
            </div>
            <div style={{backgroundColor:"#24292B",width:"90%",height:"230px",borderRadius:"30px",paddingTop:"0px",margin:"20px auto"}}>
                <div className="d-flex justify-content-between" style={{padding:"15px"}} dir="rtl">
                    <h5 style={{color:"white"}}>למוטב</h5>
                    <div className="d-flex align-items-center">
                        <h5 style={{color:"white",fontSize:"13px",width:"110px"}}>יוניון מוטורס בע"מ</h5>
                        <img src={motorsbaam} alt="" />
                    </div>
                </div>
                <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                    <h5 style={{color:"white"}}>בנק</h5>
                    <h5 style={{color:"white"}}>הפועלים - 12 </h5>
                </div>
                <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                    <h5 style={{color:"white"}}>סניף</h5>
                    <h5 style={{color:"white"}}>600</h5>
                </div>
                <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                    <h5 style={{color:"white"}}>מספר חשבון</h5>
                    <h5 style={{color:"white"}}>663965</h5>
                </div>
            </div>
                <h5 style={{gap:"10px",color:"white",fontSize:"13px", textAlign: "right",padding:"25px"}} dir="rtl">*העברה בנקאית מתעדכנת עד 4 ימי עסקים מרגע שליחת האסמכתא</h5>
                <div className="d-flex justify-content-center">
                    <button onClick={handleLogin} className="btn btn-primary" style={{backgroundColor:"#FF5800",color:"white",width:"90%",height:"45px",borderRadius:"15px",marginTop:"10px"}}>קדימה</button>               
                </div>
        </div>

    );
}
