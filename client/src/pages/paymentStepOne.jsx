import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import stepIconPayment from "../assets/icons/stepIconPayment.png"
import carPayment from "../assets/images/cars/Group18692.png"
import driver from "../assets/icons/Driver.png"
import layerIcon from "../assets/icons/Layer.png"
import Beats from "../assets/icons/Beats.png";
export default function PaymentStepOne(){
    return(
            <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center",height: "890px",width: "360px",}}>
                <div className="d-flex align-items-center flex-row justify-content-around" dir="rtl" style={{ backgroundColor: "#24292B", height: "70px" }}>
                    <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
                    <h3 style={{ color: "white" }}>ביצוע תשלום</h3>
                    <img src={backIcon}alt=""style={{ width: "40px", height: "40px" }}/>
                </div>
                <img src={stepIconPayment} alt="" />
                <img src={carPayment} alt=""style={{width:"300px",marginTop:"-130px",marginRight:"53px"}}/>
  
                  <div style={{backgroundColor:"#24292B",width:"300px",height:"300px",borderRadius:"30px",paddingTop:"0px",marginLeft:"30px"}} >
                    <h5 style={{gap:"60px",color:"white", marginTop:"10px"}}>סיכום ההזמנה שלך</h5>
                    <img src={driver} alt="" />
                    <div>
                        <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                         <h6 style={{color:"white"}}>עלות הזמנה
                            <span style={{fontSize:"10px" }}>(* כולל אגרת רישוי )</span>
                        </h6>
                        <h5 style={{color:"wshite"}}>₪153,000 </h5>                           
                        </div>
                        
                        <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                            <h5 style={{color:"white"}}>הנחת מבצע</h5>
                            <h5 style={{color:"white"}}>₪500-</h5>
                        </div>
                    </div>
                    <img src={driver} alt="" />
                    <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                        <h5 style={{color:"white"}}>סה"כ שולם</h5>
                        <h5 style={{color:"white"}}>₪59,000</h5>
                    </div>
                    <div className="d-flex flex-row align-items-center" style={{padding:"10px",gap:"1px"}} dir="rtl">
                        <img src={layerIcon} alt="" style={{padding:"5px",margin:"1px",marginTop:"-5px"}}/>
                        <h3 style={{fontSize:"13px",color:"#A7A9AA"}}>עד 4 ימי עסקים לורם איפסון ליאון איפוסים</h3>
                    </div>

                    <div className="d-flex flex-row align-items-start" style={{padding:"25px",gap:"1px"}} dir="rtl">
                        <img src={Beats} alt="" style={{margin:"1px",marginTop:"0"}}/>
                        <p style={{color:"white"}}>דניאל אביב, נציג/ת המכירות שלך מקבל עדכונים על כל מה שנעשה כאן, כמובן שתוכל לפנות אליו בכל עת</p>
                    </div>

                    <div style={{height:"125px",width:"360px",marginLeft:"-30px",backgroundColor:"#24292B"}}>
                        <div className="d-flex justify-content-between" style={{padding:"10px"}} dir="rtl">
                            <h5 style={{color:"white"}}>יתרה לתשלום  </h5>
                            <h5 style={{color:"white"}}>₪96,000</h5>
                        </div>
                        <div dir="rtl" className="justify-content-evenly d-flex ">
                            <button style={{color:"white",background:"#FF5800",borderRadius:"10px"}}>העברה בנקאית </button>
                            <button style={{backgroundColor:"#24292B",color:"white",border:"2px solid #FF5800" ,borderRadius:"10px" }}>אפשרויות מימון</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}