import React from "react";
import HeadPhone from "./headphones.svg";
import "./css/Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="nav-item">
          <a className="navbar-brand text-white" href="/">
            MuSi-que
          </a>
        </div>
        <div className="main-row">
          <div className="main-row-img">
            <img className="head-phone-img" src={HeadPhone} alt="" />
          </div>
          <div className="main-row-text">
            <h1>Music for everyone</h1>
            <p>"Where words fail, music speaks"</p>
            <Link
              to={"/home"}
              className="btn bg-gradient-to-r to-green-400 from-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black"
            >
              <p className="fa fa-play-circle mr-2 " />
              Let's Chill
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
