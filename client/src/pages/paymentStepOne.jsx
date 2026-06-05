import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import stepIconPayment from "../assets/icons/stepIconPayment.png"
import carPayment from "../assets/images/cars/Group18692.png"
import driver from "../assets/icons/Driver.png"
import layerIcon from "../assets/icons/Layer.png"
import Beats from "../assets/icons/Beats.png";
import {useNavigate} from "react-router-dom"
export default function PaymentStepOne() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/PaymentStepTwo");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          dir="rtl"
          style={{
            backgroundColor: "#24292B",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 15px",
          }}
        >
          <img src={iconX} style={{ width: 35 }} />
          <h3 style={{ color: "white", margin: 0 }}>ביצוע תשלום</h3>
          <img src={backIcon} style={{ width: 35 }} />
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <div className="text-center mt-2">
            <img
              src={stepIconPayment}
              style={{ width: "80%", maxWidth: "350px" }}
            />
          </div>

          <div className="text-center">
            <img
              src={carPayment}
              style={{ width: "100%", maxWidth: "400px" ,transform: "translateX(-70px) translateY(-130px)"}}
            />
          </div>

          <div
            style={{
              backgroundColor: "#24292B",
              width: "92%",
              maxWidth: "420px",
              margin: "-50px auto",
              borderRadius: "20px",
              padding: "15px",
              color: "white",
            }}
          >
            <h5>סיכום ההזמנה שלך</h5>

            <img src={driver} style={{ width: "100%" }} />

            <div className="d-flex justify-content-between" dir="rtl">
              <h6>עלות הזמנה</h6>
              <h5>₪153,000</h5>
            </div>

            <div className="d-flex justify-content-between" dir="rtl">
              <h5>הנחת מבצע</h5>
              <h5>₪500-</h5>
            </div>

            <div className="d-flex justify-content-between" dir="rtl">
              <h5>סה"כ שולם</h5>
              <h5>₪59,000</h5>
            </div>
                      <div className="d-flex align-items-start" dir="rtl" style={{ padding: 15 }}>
            <img src={layerIcon} style={{ marginLeft: 10 }} />
            <p style={{ color: "#A7A9AA", margin: 0 }}>
              עד 4 ימי עסקים לורם איפסון ליאון איפוסים
            </p>
          </div>
          </div>

          <div className="d-flex align-items-start" dir="rtl" style={{ padding:"60px" }}>
            <img src={Beats} style={{ marginLeft: 10 }} />
            <p style={{ color: "white", margin: 0 }}>
                דניאל אביב, נציג/ת המכירות שלך מקבל עדכונים על כל מה שנעשה כאן, כמובן שתוכל לפנות אליו בכל עת.            </p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#24292B",
            padding: "15px",
          }}
        >
          <div className="d-flex justify-content-between" dir="rtl">
            <h5 style={{ color: "white" }}>יתרה לתשלום</h5>
            <h5 style={{ color: "white" }}>₪96,000</h5>
          </div>

          <div className="d-flex gap-2" dir="rtl">
            <button
              onClick={handleLogin}
              style={{
                flex: 1,
                background: "#FF5800",
                color: "white",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              העברה בנקאית
            </button>

            <button
              style={{
                flex: 1,
                border: "2px solid #FF5800",
                background: "transparent",
                color: "white",
                borderRadius: "10px",
              }}
            >
              אפשרויות מימון
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}