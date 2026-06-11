import backGround from "../assets/hero/Vector.png";
import backIcon from "../assets/icons/iconX.png";
import arrow from "../assets/icons/arrow.png";
import zeekarCar from "../assets/images/cars/car.png";
import road from "../assets/icons/road.png";
import engine from "../assets/icons/engine.png";
import correctIcon from "../assets/icons/correctIcon.png";
import brake from "../assets/icons/brake.png";
import clipPath from "../assets/icons/clipPath.png";
import batteryIcon from "../assets/icons/batteryIcon.png";
import clip2 from "../assets/icons/clip2.png";
import charging from "../assets/icons/charging.png";
import wheel from "../assets/icons/wheel.png";
import maximumpower from "../assets/icons/maximumpower.png";
import Car from "../assets/icons/13314Car.png";


export default function CarDetails(){
    return(
            <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",minHeight: "190vh",width: "100%"}}>
                <div className="d-flex align-items-center flex-row justify-content-around"  style={{ backgroundColor: "#24292B", height: "70px"}}>                    
                    <img src={arrow} alt="" />
                    <div>
                       <h5 style={{ color: "white" }}>ZEEKR X</h5>
                       <h6 style={{ color: "white" }}>62-855-10 מס׳ רכב</h6>
                    </div>
                    <img src={backIcon} alt=""style={{ width: "40px", height: "40px" }}/>
                </div>  
                <div>
                    <ul className="d-flex flex-row " style={{padding:" 20px",paddingRight:"-5px"}} dir="rtl">
                        <li className="col-2" style={{color:"white",textDecoration:"underline",listStyleType:"none"}}>הרכב</li>
                        <li className="col-3" style={{color:"#7C7F80",listStyleType:"none"}}>סוללה</li>
                        <li className="col-3" style={{color:"#7C7F80",listStyleType:"none"}}>דאשבורד</li>
                        <li className="col-4" style={{color:"#7C7F80" ,listStyleType:"none"}}>היסטוריית טיפולים </li>
                    </ul>
                </div>
                <div className="container d-flex justify-content-center mt-5">
                    <div className="text-center d-flex flex-column align-items-center"style={{width: "100%",maxWidth: "360px",backgroundColor: "#24292B",borderRadius: "30px",padding: "20px",}}>
                        <img src={zeekarCar}alt=""className="img-fluid" style={{maxWidth: "240px",marginTop: "-80px",}}/>
                        <h5 className="text-white mt-3">ZEEKAR X</h5>
                        <h6 style={{ color: "white" }}>62-855-10 מס׳ רכב</h6>
                        <div className="d-flex gap-4">
                            <button className="btn mt-3" style={{border: "2px solid #FF5800",width: "134",borderRadius: "20px",color: "white",}}> הסוכנות שלך</button>
                            <button className="btn mt-3" style={{border: "2px solid #FF5800",width: "134px",borderRadius: "20px",color: "white",}}>מסמכי הרכב</button>
                        </div>
                    </div>
                </div>
                <h2 style={{color:"white",alignItems:"center",transform:"translateY(20px)"}} >פרטי הרכב שלך </h2>
                
                <div className="d-flex flex-column gap-2 " style={{transform:"translateY(20px) translateX(-230px)"}}>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",borderRadius:"10px",paddingTop:"10px"}} className="col-6">
                            <img src={road} alt="" />
                            <h6 style={{color:"#A7A9AA"}}>מועד עלייה לכביש</h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>ינואר 2020</h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={engine} alt="" />
                            <h6 style={{color:"#A7A9AA"}}>הנעה </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>חשמלית</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={correctIcon} alt="" />
                            <h6 style={{color:"#A7A9AA"}}>רמת גימור </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>460 PRO </h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={brake} alt="" />
                            <h6 style={{color:"#A7A9AA"}}>מרווח טיפולים </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>שנה או 15K ק"מ</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={clipPath} alt="" />
                            <h6 style={{fontSize:"12px",color:"#A7A9AA"}}>קיבולת סוללה  </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}> 53 קוט"ש </h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={batteryIcon} alt="" />
                            <h6 style={{fontSize:"12px",color:"#A7A9AA",padding:"5px"}}>טווח סוללה WLTP </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}> 460 ק"מ</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={clip2} alt="" />
                            <h6 style={{fontSize:"12px", color:"#A7A9AA",padding:"5px"}}>  סוג חיבור AC </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>TYPE 2</h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={clip2} alt="" />
                            <h6 style={{color:"#A7A9AA",fontSize:"12px",padding:"5px"}}> סוג חיבור DC </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}> CCS2</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={charging} alt="" />
                            <h6 style={{fontSize:"12px", color:"#A7A9AA",padding:"5px"}}>הספק טעינה מקסימלי  </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>AC-11kW</h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={charging} alt="" />
                            <h6 style={{color:"#A7A9AA",fontSize:"12px",padding:"5px"}}> הספק טעינה מקסימלי </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}> DC- 70KW</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={wheel} alt="" />
                            <h6 style={{fontSize:"12px", color:"#A7A9AA",padding:"5px"}}>לחץ אוויר אחורי    </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>PSI 36</h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={wheel} alt="" />
                            <h6 style={{color:"#A7A9AA",fontSize:"12px",padding:"5px",borderRadius:"10px"}}> לחץ אוויר אחורי  </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}> PSI 36</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-row gap-3" dir="rtl" style={{paddingRight:"50px"}}>
                        <div style={{backgroundColor:"#3A3E40",height:"100px",width:"150px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={maximumpower} alt="" />
                            <h6 style={{fontSize:"12px", color:"#A7A9AA",padding:"5px"}}> הספק מרבי</h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}>204 כ״ס</h6>
                        </div>
                        <div style={{width:"150px",backgroundColor:"#3A3E40",height:"100px",paddingTop:"10px",borderRadius:"10px"}} className="col-6">
                            <img src={Car} alt="" />
                            <h6 style={{color:"#A7A9AA",fontSize:"12px",padding:"5px"}}>תאוצה מ-0 ל-100  </h6>
                            <h6 style={{color:"white",fontWeight:"bold"}}> 7.7 שניות</h6>
                        </div>
                    </div>
                </div>
            </div>
    );
}