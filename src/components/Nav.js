import React from "react";
import { FaBeer } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { MdNotifications } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import "../style.css";
export default function Nav() {
  return (
    <div
      className="nav-container"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
    >
      <div className="nav">
        <div className="nav-row1">
          <TiLocation className="nav-icons" />
          <p
            style={{
              border: "1px solid white",
              padding: "2px 15px",
              borderRadius: "10px",
            }}
          >
            Harhwa Fatak Nirala Nagar,Gorakhpur
          </p>
          <MdNotifications className="nav-icons" />
          <BiCartAdd className="nav-icons" />
        </div>
        <div className="nav-row1">
          <AiOutlineSearch className="nav-icons" />
          <input
            type="text"
            className="input"
            placeholder=" Search for Prducts "
            style={{ backgroundColor: "white", border: "none" }}
          ></input>

          <BsFillMicFill className="nav-icons" />
        </div>
      </div>
    </div>
  );
}
