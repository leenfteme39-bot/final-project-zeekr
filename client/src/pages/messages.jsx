import zeekerCar from "../assets/images/cars/Frame2.png";
import backIcon from "../assets/icons/15755.png";
import backGround from "../assets/hero/Vector.png";

export default function Messages() {
  return (
    <div
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="d-flex flex-row p-2 w-100"
        style={{
          maxWidth: "1200px",
          gap: "20px",
          height: "50px",
          alignItems: "center",
        }}
        dir="rtl"
      >
        <img src={backIcon} alt="" />
        <h5 style={{ color: "white" }}>ההודעות שלי</h5>
      </div>

      <img
        src={zeekerCar}
        alt=""
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div
        style={{
          margin: "80px",
          backgroundColor: "#24292B",
          width: "90%",
          maxWidth: "500px",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h4 style={{ color: "white",padding:"20px" }}>השלמת תהליך המימון</h4>
        <p style={{ color: "white" }}>
          יש לסיים את התהליך עד לתאריך 30/07/23 <br />
          עברנו שלב בתהליך המימון והשמחה רבה , מה שנשאר הוא להיכנס ולהשלים את
          התהליך
        </p>
      </div>

      <button
        style={{
          marginTop: "auto",
          marginBottom: "30px",
          backgroundColor: "#FF5800",
          color: "white",
          width: "auto",
          height: "40px",
          borderRadius: "33px",
          fontWeight: "bold",
        }}
      >
        לסיום תהליך המימון
      </button>
    </div>
  );
}