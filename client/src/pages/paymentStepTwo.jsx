import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import uplIcon from "../assets/icons/uplIcon.png"
export default function PaymentStepTwo(){
    return(
        <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center",height: "890px",width: "360px",}}>
            <div className="d-flex align-items-center flex-row justify-content-around" dir="rtl" style={{ backgroundColor: "#24292B", height: "70px" }}>
                <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
                <h3 style={{ color: "white" }}>ביצוע תשלום</h3>
                <img src={backIcon}alt=""style={{ width: "40px", height: "40px" }}/>
            </div>
            <div className="d-flex flex-column "style={{padding:"10px",textAlign: "right"}} dir="rtl">
                <h5 style={{color:"white",fontSize:"15px"}} className="">צירוף אישור תשלום</h5>
                <h5 style={{color:"white",fontSize:"10px"}}>כאן ניתן להעלות את מסמך העברה בנקאית שביצעת מול הבנק</h5>
                <h5 style={{gap:"10px",color:"white",fontSize:"10px"}}>*כאן אפשר להעלות את אישור ההעברה הבנקאית. קובץ אחד בכל ההעלאה בבקשה.</h5>
            </div>
             <div dir="rtl" style={{padding:"20px"}}>
                <input type="file" style={{display:'none'}} id="fileUpload"/>         
                <label htmlFor="fileUpload" dir="rtl" className="d-flex flex-row align-items-end p-2" style={{gap:"20px",border:"2px dotted #6A6B70",width:"300px",height:"50px",borderRadius:"20px"}} >
                    <img src={uplIcon} alt=""className="" />
                    <h4 style={{color:"white",fontSize:"15px"}}>להעלאת שם מסמך</h4>
                </label>
            </div>
        </div>

    );
}
