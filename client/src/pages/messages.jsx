import zeekerCar from "../assets/images/cars/Frame2.png";
import backIcon from "../assets/icons/15755.png";
import backGround from "../assets/hero/Vector.png"
export default function Messages() {
    return(
        <div style={{backgroundImage: `url(${backGround})`,backgroundSize: "cover",backgroundPosition: "center",height: "697px",width: "390px"}}>
            <div className="d-flex flex-row p-2"style={{gap:100,height:"50px",alignItems:"center"}} dir="rtl">
                <img src={backIcon} alt="" />
                <h5 style={{color:"white"}}>ההודעת שלי</h5>
            </div>
            <img src={zeekerCar} alt="" />
            <div style={{margin:"20px",backgroundColor:"#24292B",height:"150px",width:"90%",borderRadius:"20px" }} className="p-3 ">
                <h4 style={{color:"white"}}>השלמת תהליך  המימון </h4>
                <p style={{color:"white"}}>יש לסיים את התהליך עד לתאריך 30/07/23 <br/>עברנו שלב בתהליך המימון והשמחה רבה , מה שנשאר הוא להיכנס ולהשלים את התהליך</p>
            </div>
            <button style={{alignItems:"center",paddingLeft:"20px",margin:"80px",backgroundColor:"#FF5800",color:"white",width:"177px",height:"35px",borderRadius:"33px"}}className="fw-bold">לסיום תהליך המימון </button>
        </div>
    );
}