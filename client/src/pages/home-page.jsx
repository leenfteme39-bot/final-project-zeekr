import logoImg from "../assets/logos/logo.png";
import btIcon from "../assets/logos/BT.png";
import backGround from "../assets/hero/Vector.png";
import zeekarCar from "../assets/images/cars/car.png";
import frameIcon from "../assets/icons/Frame.png";
import mapLocation from "../assets/logos/icons1.png";
import charge from "../assets/logos/icons.png";
import myZeekar from "../assets/logos/logo1.png";
import ctaIcon from "../assets/logos/cta.png";
import backlowerSkeleton from "../assets/logos/11825.png";
import icon2 from "../assets/logos/icons2.png";
import icon3 from "../assets/logos/icons3.png";
import icon4 from "../assets/logos/icons4.png";
import Group399 from "../assets/logos/Group399.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const user =JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="min-vh-100 w-100"
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center" dir="rtl">
            <div className="d-flex align-items-center gap-2">
              <img src="" alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <h6 className="text-white m-0">בוקר טוב {user?.firstName}
              </h6>
            </div>

            <img src={logoImg} alt="" style={{ width: "30px" }} />
            <img src={btIcon} alt="" style={{ width: "40px" }} />
          </div>
        </div>

        <div className="container d-flex justify-content-center mt-5">
          <div
            className="text-center d-flex flex-column align-items-center"
            style={{
              width: "100%",
              maxWidth: "360px",
              backgroundColor: "#24292B",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <img
              src={zeekarCar}
              alt=""
              className="img-fluid"
              style={{ maxWidth: "240px", marginTop: "-80px" }}
            />

            <h5 className="text-white mt-3">ZEEKAR X</h5>
            <h6 className="text-white">מס' רכב</h6>

            <button
              type="button"
              className="btn mt-3"
              style={{
                border: "2px solid #FF5800",
                width: "70%",
                borderRadius: "20px",
                color: "white",
              }}
            >
              המסמכים שלי
            </button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-4" style={{ paddingTop: "30px" }}>
          <img src={frameIcon} alt="" style={{ width: "30px" }} />
          <h5 style={{ color: "white" }}>לשירותך</h5>
        </div>

        <div className="row pt-4 px-2">
          <div className="col-4 col-md-4">
            <div className="d-flex flex-column justify-content-center gap-2"
              style={{ backgroundColor: "#3A3E40", borderRadius: "20px", height: "150px", alignItems: "center" }}>
              <img src={mapLocation} alt="" style={{ width: "70px" }} />
              <h6 className="text-white text-center">ניווט לחניון<br />קרוב</h6>
            </div>
          </div>

          <div className="col-4 col-md-4">
            <div className="d-flex flex-column justify-content-center gap-2"
              style={{ backgroundColor: "#3A3E40", borderRadius: "20px", height: "150px", alignItems: "center" }}>
              <img src={charge} alt="" style={{ width: "70px" }} />
              <h6 className="text-white text-center">נקודות טעינה</h6>
            </div>
          </div>

          <div className="col-4 col-md-4">
            <div className="d-flex flex-column justify-content-center gap-2"
              style={{ backgroundColor: "#3A3E40", borderRadius: "20px", height: "150px", alignItems: "center" }}>
              <img src={myZeekar} alt="" style={{ width: "70px" }} />
              <h6 className="text-white text-center">MY <br /> ZEEKR</h6>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 CTA FIXED בצורה נכונה */}
      <div dir="rtl" className="d-flex flex-column align-items-center mt-4">

        {/* CTA ICON - עכשיו יציב */}
        <div className="d-flex justify-content-center" style={{ width: "100%" }}>
          <img
            src={ctaIcon}
            alt=""
            style={{
              width: "70px",
              display: "block",
              transform: "translateY(10px)"
            }}
          />
        </div>

        {/* FOOTER BAR */}
        <div
          className="d-flex justify-content-between px-3 align-items-center"
          style={{
            backgroundImage: `url(${backlowerSkeleton})`,
            height: "60px",
            borderRadius: "20px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <div className="d-flex align-items-center gap-4 px-2 py-1">
            <div style={{ backgroundColor: "white", borderRadius: "10px" }}
              className="d-flex flex-row align-items-center gap-1">
              <img src={icon2} alt="" style={{ width: "30px" }} />
              <span>ראשי</span>
            </div>
            <img src={icon3} alt="" style={{ width: "30px" }} />
          </div>

          <div className="d-flex flex-row gap-5">
            <img src={icon4} alt="" style={{ width: "30px" }} />
            <img src={Group399} alt="" style={{ width: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}