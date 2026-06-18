import shm from "../assets/mora/shm.png";
import zeekr1 from "../assets/mora/zeekr1.png";
import map from "../assets/mora/map.png";
import aaaa from "../assets/mora/aaaa.png";
import sora1 from "../assets/mora/sora1.png";
import sora2 from "../assets/mora/sora2.png";
import sora3 from "../assets/mora/sora3.png";
import sora4 from "../assets/mora/sora4.png";
import hzmna from "../assets/mora/hzmna.png";
import shinoi from "../assets/mora/shinoi.png";
import phone from "../assets/mora/phone.png";
import whatsapp from "../assets/mora/whatsapp.png";
import navigate from "../assets/mora/navigate.png";
import bbb from "../assets/mora/bbb.png";
import shirot from "../assets/mora/shirot.png";

export default function Map() {
  return (
    <div style={{
      backgroundColor: "#24292b",
      minHeight: "100vh",
      width: "100%"
    }}>

      <div style={{
        backgroundColor: "#24292b",
        width: "100%",
        height: "130px",
        display: "flex",
        justifyContent: "center",
      }}>
        
        <img src={zeekr1} alt=""
          style={{
            width: "110px",
            height: "30px",
            marginTop: "30px"
          }}
        />

        <img src={shm} alt=""
          style={{
            position: "absolute",
            right: "30px",
            width: "20px",
            marginTop: "30px",
            cursor: "pointer",
          }}
        />
      </div>


      <div style={{
        position: "relative",
        width: "100%"
      }}>

        <img src={map} alt=""
          style={{
            width: "100%",
            height: "380px",
            display: "block",
          }}
        />

        <img src={bbb} alt=""
          style={{
            right: "50px",
            position: "absolute",
            marginTop: "15px"
          }}
        />

        <img src={shirot} alt=""
          style={{
            position: "absolute",
            right: "40px",
            marginTop: "160px"
          }}
        />

        <img src={hzmna} alt=""
          style={{
            position: "fixed",
            cursor: "pointer",
            bottom: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => e.target.style.opacity = "0.6"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        />

        <img src={shinoi} alt=""
          style={{
            position: "fixed",
            cursor: "pointer",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => e.target.style.opacity = "0.6"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        />


        <img src={aaaa} alt=""
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0",
            width: "100%"
          }}
        />


        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "15px",
          zIndex: 10
        }}>

          <a href="tel:0773344000">
            <img src={phone} alt=""
              style={{
                width: "60px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.6"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            />
          </a>


          <a href="https://wa.me/0773344001">
            <img src={whatsapp} alt=""
              style={{
                width: "60px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.6"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            />
          </a>


          <a href="tel:0773344000">
            <img src={navigate} alt=""
              style={{
                width: "60px",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.6"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            />
          </a>

        </div>


        <div style={{
          position: "absolute",
          top: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}>

          <img src={sora4} alt="" style={{ width: "60px" }} />
          <img src={sora3} alt="" style={{ width: "100px" }} />
          <img src={sora2} alt="" style={{ width: "110px" }} />
          <img src={sora1} alt="" style={{ width: "35px" }} />

        </div>

      </div>
    </div>
  );
}