import React from "react";
// import { FiDroplet } from "react-icons/fi";
// import { TbBulb } from "react-icons/tb";
// import { AiFillFire } from "react-icons/ai";
// import { IoIosPeople } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
export default function Footercom() {
  return (
    <div className="footer">
      <AiFillHome className="footer-icon" />
      <BsPeopleFill className="footer-icon" />
      <AiFillAppstore className="footer-icon" />
      <IoIosListBox className="footer-icon" />
      <IoChatbubbleEllipsesSharp className="footer-icon" />
    </div>
  );
}
