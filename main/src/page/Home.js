import "./css/Home.css";
import Navbar from "../components/songCom/Navbar";
import DetailSong from "../components/songCom/DetailSong";
import ListSongs from "../components/songCom/ListSongs";
import { Songs } from "../Context";
import Playing from "../components/songCom/Playing";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function Home() {
  const [listSong, setListSong] = useState();
  const [song, setSong] = useState();

  const handleSetSong = (idSong) => {
    const song = listSong.find((song) => song.id === idSong);
    if (!song) setSong(listSong[0]);
    else setSong(song);
  };

  useEffect(() => {
    fetch("https://music-website-project.herokuapp.com/api/songs")
      .then((res) => res.json())
      .then((result) => {
        setListSong(result.songs);
        setSong(result.songs[0]);
      });
  }, []);

  if (!song || !listSong) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#00000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        wrapperClassName=""
        visible={true}
      />
    );
  }

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs: listSong, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-gradient-to-r from-cyan-700 to-blue-800 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default Home;
