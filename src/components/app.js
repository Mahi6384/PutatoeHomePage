import React from "react";
// import { ReactDOM } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Mainfun from "./Main";
// import Footercom from "./Footer";
import Footercom from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <Mainfun />
      <Footercom />
    </div>
  );
}
