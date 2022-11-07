import "./css/Home.css";
import Navbar from "../components/authorCom/Navbar";
import Images from "../components/authorCom/Images";
import Information from "../components/authorCom/Information";
import { Songs } from "../Context";
import Footer from "../components/authorCom/Footer";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function Author() {
  console.log("connected");
  return (
    <div className="App">
      <Songs.Provider value={{}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-gradient-to-r from-cyan-700 to-blue-800 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <Images />
          {/* span 2 */}
          <Information />
        </div>
        <Footer />
      </Songs.Provider>
    </div>
  );
}

export default Author;
