import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Songs } from "../../Context";
export default function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="col-span-1 p-3"
          style={{
        backgroundImage: `url(
          ${songs.links.images[1].url}
        )`,
      }}
>
      <h2 className="text-rose-400 font-bold">
        <p className="fa fa-forward text-rose-400 mr-1" />
        NOW PLAYING
      </h2>
      <h2 className="text-white text-3xl">{song.name}</h2>
      <div className="w-[240px] m-auto mt-10 ">
        <img
          className="w-full rounded-tl-3xl rounded-br-3xl border-4 border-double"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <Link to={`/author/findByAuthorName?name=${song.author}`}>
          <img
            className="w-[70px] rounded-full border-2"
            src={song.links.images[1].url}
            alt="avatar"
          />
        </Link>
        <Link to={`/author/findByAuthorName?name=${song.author}`} className="">
          <span className="text-white text-3xl">{song.author}</span>
        </Link>
      </div>
    </div>
  );
}
