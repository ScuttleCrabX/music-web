import { render } from "@testing-library/react";
import React, { useContext, useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import { Songs } from "../../Context";
// import { retrieveSongs, findSongsByName } from "../acts/song";
// import { connect } from "react-redux";
export default function Information() {
  return (
    <div className="mt-20">
      <ul className="list-disc">
        <li className="text-white text-2xl">Name: Nguyễn Minh Hiếu</li>
        <li className="text-white text-2xl">Birth Day: 16/05/2002</li>
        <li className="text-white text-2xl">Nation: Việt Nam</li>
        <li className="text-white text-2xl">
          Facebook:{" "}
          <a
            className="text-cyan-400 text-decoratio-line: underline hover:text-cyan-200"
            href="https://www.facebook.com/profile.php?id=100079437703701"
          >
            Hnim Uếih
          </a>{" "}
        </li>
        <li className="text-white text-2xl">
          "The sun will rise and we will cry again."
        </li>
      </ul>
      <img
        className="mt-20"
        src="https://lh3.googleusercontent.com/iYwQ6fB68h7q4o3PiiGO9l25QRr9nSDtkbDuqDfxlIpJsm6PzIkn-WoiEbTYjhxwjQE"
        alt=""
        width="200"
        height="200"
      />
    </div>
  );
}
