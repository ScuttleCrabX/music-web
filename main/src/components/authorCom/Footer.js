import React, { Component, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router-dom";
import { Songs } from "../../Context";
// import { retrieveSongs, findSongsByName } from "../acts/song";
// import { connect } from "react-redux";

export default function Footer() {
  //   const { song, handleSetSong } = useContext(Songs);
  //   const handleClickNext = () => {
  //     handleSetSong(song.id + 1);
  //   };
  //   const handleClickPre = () => {
  //     handleSetSong(song.id - 1);
  //   };
  return (
    <div className="bg-slate-800 text-white items-center flex justify-evenly h-24 font-bold">
      <span>Chưa làm kịp cái này, xem tạm mặt mình nha :v</span>
    </div>
  );
}
