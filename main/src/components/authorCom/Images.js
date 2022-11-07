import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authors } from "../../Context";
import image from "./img.jpg";
export default function Images() {
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-white  font-bold">
        <p className="fa fa-forward" />
        Author information
      </h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          className="w-full roundedtl-3xl border-4 border-double"
          src={image}
          alt="avatar"
        />
      </div>
    </div>
  );
}
