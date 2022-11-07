import React from "react";
import { Link } from "react-router-dom";
import "../../page/css/Login.css";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center h-24 bg-slate-800 leading-[6rem] text-3xl">
        <div></div>
        <Link
          to={"/home"}
          className="navbar-brand italic font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-rose-400 "
        >
          MuSi-que
        </Link>
        <Link
          to={"/"}
          className="fa fa-sign-out justify-items-end mr-6 text-white hover:text-yellow-300"
        />
      </div>
    </div>
  );
}
