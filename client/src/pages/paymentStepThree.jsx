import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import step3 from "../assets/icons/step3.png"
import ElipseTimeline from "../assets/icons/ElipseTimeline.png"
import line from "../assets/icons/line.png"
import Driver from"../assets/icons/Driver.png"
import uplIcon from "../assets/icons/uplIcon.png"
export default function PaymentStepThree(){
    return(
            <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center",height: "100vh",width: "400px",}}>
                <div className="d-flex align-items-center flex-row justify-content-around" dir="rtl" style={{ backgroundColor: "#24292B", height: "70px" }}>
                    <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
                    <h3 style={{ color: "white" }}>ביצוע תשלום</h3>
                    <img src={backIcon}alt=""style={{ width: "40px", height: "40px" }}/>
                </div>      
                <img src={step3} alt="" style={{padding:"20px"}}/>  
                <h4 style={{color:"white",alignItems:"center",fontSize:"20px"}}>מעקב אחרי בקשת המימון</h4>
                <div className="d-flex" dir="rtl">
                    <div>
                        <img src={line} alt="" style={{position:"absolute",height:"900px",padding:"20px"}}/>
                        <img src={ElipseTimeline} alt="" style={{position:"relative", left:"-10px",top:"800px"}}/>
                        <img src={ElipseTimeline} alt="" style={{position:"relative" , left:"10px",top:"470px"}}/>
                        <img src={ElipseTimeline} alt="" style={{position:"relative" ,left:"-10px", top:"200px"}}/>
                        <img src={ElipseTimeline} alt="" style={{position:"relative" ,left:"10px"}}/>
                    </div>
                    <div >
                        <div style={{marginBottom:"30px",backgroundColor:"#24292B",borderRadius:"40px",textAlign:"right",height:"200px",width:"350px",padding:"30px",paddingRight:"10px"}}>
                            <h3 style={{color:"white",fontSize:"20px"}}>פניה לסוכן</h3>
                            <img src={Driver} alt="" />
                            <p style={{color:"white",fontSize:"20px"}}>העברנו את הבקשה לנציג/ת המכירות. בקרוב נעדכן אותך לגבי התקדמות הטיפול</p>
                        </div>
                        <div style={{marginBottom:"30px",backgroundColor:"#24292B",borderRadius:"40px",textAlign:"right",height:"200px",width:"350px",padding:"30px",paddingRight:"10px"}}>
                            <h3 style={{color:"white",fontSize:"20px"}}>הגשת בקשה</h3>
                            <img src={Driver} alt="" />
                            <p style={{color:"white",fontSize:"20px"}}>בקשתך התקבלה והיא בטיפול סוכנ/ת המכירות</p>
                        </div>
                        <div style={{marginBottom:"30px",backgroundColor:"#24292B",borderRadius:"40px",textAlign:"right",height:"300px",width:"350px",padding:"30px",paddingRight:"10px"}}>
                            <h3 style={{color:"white",fontSize:"20px"}}>החתמת מסמכים</h3>
                            <img src={Driver} alt="" />
                            <p style={{color:"white",fontSize:"20px"}}>לאחר הורדת המסמך, נבקש להחתים אותו בבנק או אצל הגוף המממן. בבקשה לשים לב שכל הפרטים נכונים</p>
                            <div className="d-flex gap-3 justify-content-center" style={{height:"50px",width:"250px",border:"2px solid #FF5800",borderRadius:"20px"}}>
                                <img src={uplIcon} alt="" />
                                <h3 style={{color:"white",fontSize:"20px"}}>מסמך להורדה</h3>
                            </div>
                        </div>
                        <div style={{ marginBottom:"30px",backgroundColor:"#24292B",borderRadius:"40px",textAlign:"right",height:"200px",width:"350px",padding:"30px",paddingRight:"10px"}}>
                            <h3></h3>
                            <img src={Driver} alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>









            </div>
    );
}