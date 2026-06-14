import backGround from "../assets/hero/Vector.png";
import iconX from "../assets/icons/15755.png";
import backIcon from "../assets/icons/iconX.png";
import step3 from "../assets/icons/step3.png";
import ElipseTimeline from "../assets/icons/ElipseTimeline.png";
import Driver from "../assets/icons/Driver.png";
import uplIcon from "../assets/icons/uplIcon.png";
import Icons11 from "../assets/icons/Icons11.png";

export default function PaymentStepThree() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-around"
          dir="rtl"
          style={{
            backgroundColor: "#24292B",
            height: "70px",
          }}
        >
          <img src={iconX} alt="" style={{ width: "40px", height: "40px" }} />
          <h3 style={{ color: "white" }}>ביצוע תשלום</h3>
          <img src={backIcon} alt="" style={{ width: "40px", height: "40px" }} />
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <img src={step3} alt="" style={{ width: "80%", maxWidth: "350px" }} />
        </div>

        <h4 style={{ color: "white", textAlign: "center" }}>
          מעקב אחרי בקשת המימון
        </h4>

        <div
          className="d-flex"
          dir="rtl"
          style={{ gap: "20px", padding: "20px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              minWidth: "40px",
            }}
          >
            <div
              style={{
                width: "2px",
                backgroundColor: "#6A6B70",
                flex: 1,
                minHeight: "900px",
              }}
            />

            <div style={{ position: "absolute", top: "40px" }}>
              <img src={ElipseTimeline} alt="" />
            </div>
            <div style={{ position: "absolute", top: "260px" }}>
              <img src={ElipseTimeline} alt="" />
            </div>
            <div style={{ position: "absolute", top: "480px" }}>
              <img src={ElipseTimeline} alt="" />
            </div>
            <div style={{ position: "absolute", top: "700px" }}>
              <img src={ElipseTimeline} alt="" />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              flex: 1,
              padding: "0 10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#24292B",
                borderRadius: "40px",
                textAlign: "right",
                padding: "30px",
                width: "100%",
              }}
            >
              <h3 style={{ color: "white" }}>פניה לסוכן</h3>
              <img src={Driver} alt="" />
              <p style={{ color: "white" }}>
                העברנו את הבקשה לנציג/ת המכירות.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#24292B",
                borderRadius: "40px",
                textAlign: "right",
                padding: "30px",
                width: "100%",
              }}
            >
              <h3 style={{ color: "white" }}>הגשת בקשה</h3>
              <img src={Driver} alt="" />
              <p style={{ color: "white" }}>
                בקשתך התקבלה והיא בטיפול.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#24292B",
                borderRadius: "40px",
                textAlign: "right",
                padding: "30px",
                width: "100%",
              }}
            >
              <h3 style={{ color: "white" }}>החתמת מסמכים</h3>
              <img src={Driver} alt="" />
              <p style={{ color: "white" }}>
                לאחר הורדת המסמך יש להחתים בבנק.
              </p>

              <div
                className="d-flex justify-content-center align-items-center gap-3"
                style={{
                  height: "50px",
                  width: "100%",
                  border: "2px solid #FF5800",
                  borderRadius: "20px",
                  marginTop: "10px",
                }}
              >
                <img src={Icons11} alt="" />
                <h3 style={{ color: "white", fontSize: "16px" }}>
                  מסמך להורדה
                </h3>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#24292B",
                borderRadius: "40px",
                textAlign: "right",
                padding: "30px",
                width: "100%",
              }}
            >
              <h3 style={{ color: "white" }}>העלאת מסמך</h3>
              <img src={Driver} alt="" />
              <p style={{ color: "white" }}>
                כאן מעלים את טופס השיעבוד החתום.
              </p>

              <div
                className="d-flex justify-content-center align-items-center gap-3"
                style={{
                  height: "50px",
                  width: "100%",
                  border: "2px solid #FF5800",
                  borderRadius: "20px",
                }}
              >
                <img src={uplIcon} alt="" />
                <h3 style={{ color: "white", fontSize: "16px" }}>
                  מסמך אישור מימון
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "20px" }}>
          <button
            style={{
              width: "220px",
              height: "40px",
              borderRadius: "30px",
              backgroundColor: "black",
              color: "#919495",
              border: "1px solid #919495",
            }}
          >
            סיום התהליך
          </button>
        </div>
      </div>
    </div>
  );
}