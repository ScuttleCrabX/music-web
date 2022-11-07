import { render } from "@testing-library/react";
import React, { useContext, useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import { Songs } from "../../Context";
// import { retrieveSongs, findSongsByName } from "../acts/song";
// import { connect } from "react-redux";
export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setidSong(song.id);
  }, [song]);

  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-yellow-500 h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-transperent h-12 text-white hover:bg-slate-700 ${
                idSong === song.id && "bg-slate-600 text-yellow-300 "
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">
                <Link to={`/author/findByAuthorName?name=${song.author}`}>
                  {song.author}
                </Link>
              </td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
