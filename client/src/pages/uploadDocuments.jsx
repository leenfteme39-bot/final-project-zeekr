import zeekr from "../assets/mora/zeekr.png";
import hzra from "../assets/mora/hzra.png";
import x from "../assets/mora/x.png";
import plus from "../assets/mora/plus.png";
import texts from "../assets/mora/texts.png";
import texts1 from "../assets/mora/texts1.png";
import texts2 from "../assets/mora/texts2.png";
import hshvonit from "../assets/mora/hshvonit.png";
import menu from "../assets/mora/menu.png";
import rekhv from "../assets/mora/rekhv.png";
import rekhv2 from "../assets/mora/rekhv2.png";
import CTA from "../assets/mora/CTA.png";
import { useRef, useState } from "react";

export default function UploadDocuments() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "#24292b",
        minHeight: "100vh",
        width: "100%",
        color: "white",
        fontSize: "40px",
        position: "relative",
      }}
    >
      <img
        src={zeekr}
        alt=""
        style={{
          width: "100px",
          display: "block",
          margin: "20px auto",
        }}
      />

      <img
        src={hzra}
        alt=""
        style={{
          position: "absolute",
          right: "20px",
          width: "20px",
          top: "20px",
          cursor: "pointer",
        }}
      />

      <img
        src={x}
        alt=""
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          width: "20px",
          cursor: "pointer",
        }}
      />

      <div
        style={{
          backgroundColor: "#24292b",
          width: "100%",
          height: "80px",
          position: "absolute",
          top: "80px",
        }}
      />

      <img
        src={plus}
        alt=""
        onClick={() => fileInputRef.current.click()}
        style={{
          position: "absolute",
          top: "85px",
          left: "20px",
          cursor: "pointer",
        }}
      />

      <input
        type="file"
        ref={fileInputRef}
        multiple
        style={{ display: "none" }}
        onChange={(e) => {
          setFiles((prevFiles) => [
            ...prevFiles,
            ...Array.from(e.target.files),
          ]);
        }}
      />

      <img
        src={texts}
        alt=""
        style={{
          position: "absolute",
          right: "30px",
          top: "70px",
          width: "300px",
        }}
      />

      <div style={{ marginTop: "160px" }}>
        {files.map((file, index) => (
          <div
            key={index}
            style={{
              color: "white",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "rtl",
              marginRight: "60px",
              fontSize: "30px",
            }}
          >
            <div
              onClick={() => window.open(URL.createObjectURL(file))}
              style={{ cursor: "pointer" }}
            >
              {file.name}
            </div>

            <div style={{ position: "relative" }}>
              <img
                src={menu}
                alt=""
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
                style={{
                  cursor: "pointer",
                  marginLeft: "40px",
                  width: "10px",
                }}
              />

              {openMenu === index && (
                <div
                  onClick={() => {
                    const updatedFiles = [...files];
                    updatedFiles.splice(index, 1);
                    setFiles(updatedFiles);
                    setOpenMenu(null);
                  }}
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "0px",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  מחק
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#24292b",
          width: "100%",
          height: "80px",
          marginTop: "180px",
        }}
      >
        <img
          src={texts1}
          alt=""
          style={{
            position: "absolute",
            marginTop: "15px",
            right: "30px",
            width: "300px",
          }}
        />
      </div>

      <img
        src={hshvonit}
        alt=""
        style={{
          position: "absolute",
          marginTop: "30px",
          right: "50px",
        }}
      />

      <div
        style={{
          backgroundColor: "#24292b",
          width: "100%",
          height: "80px",
          marginTop: "100px",
        }}
      >
        <img
          src={texts2}
          alt=""
          style={{
            position: "absolute",
            marginTop: "15px",
            right: "30px",
            width: "300px",
          }}
        />

        <img
          src={menu}
          alt=""
          style={{
            position: "absolute",
            left: "50px",
            marginTop: "30px",
          }}
        />
      </div>

      <img
        src={rekhv}
        alt=""
        style={{
          position: "absolute",
          right: "50px",
          marginTop: "30px",
        }}
      />

      <img
        src={rekhv2}
        alt=""
        style={{
          position: "absolute",
          right: "50px",
          marginTop: "120px",
        }}
      />

      <img
        src={CTA}
        alt=""
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
