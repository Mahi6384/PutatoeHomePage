import React from "react";
import { FiDroplet } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { AiFillFire } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoMdLaptop } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi";
import { GoDeviceMobile } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineFeedback } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";
export default function Mainfun() {
  return (
    <main className="main">
      <section className="icon-row">
        <GoDeviceMobile className="main-icon" />
        <IoMdLaptop className="main-icon" />
        <HiCurrencyRupee className="main-icon" />
        <TfiAnnouncement className="main-icon" />
      </section>
      <section className="icon-row">
        <IoNewspaperOutline className="main-icon" />
        <TfiCommentAlt className="main-icon" />
        <IoIosPeople className="main-icon" />
        <MdOutlineFeedback className="main-icon" />
      </section>
      <section className="icon-row">
        <AiFillFire className="main-icon" />
        <TbBulb className="main-icon" />
        <FiDroplet className="main-icon" />
        <BsArrowRightCircleFill className="main-icon" />
      </section>
    </main>
  );
}
