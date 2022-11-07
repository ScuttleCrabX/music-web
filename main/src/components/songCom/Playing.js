import React, { Component, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../../Context";
// import { retrieveSongs, findSongsByName } from "../acts/song";
// import { connect } from "react-redux";

export default function Playing() {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPre = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}
