// import { CREATE_SONG, RETRIEVE_SONGS, UPDATE_SONG } from "./types";

// import SongService from "../services/song.serv";

// export const createSong = (name, id) => async (dispatch) => {
//   try {
//     const res = await SongService.create({ name, id });
//     dispatch({
//       type: CREATE_SONG,
//       payload: res.data,
//     });
//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const retrieveSongs = () => async (dispatch) => {
//   try {
//     const res = await SongService.getAll();
//     dispatch({
//       type: RETRIEVE_SONGS,
//       payload: res.data.songs,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const findSongsByName = (name) => async (dispatch) => {
//   try {
//     const res = await SongService.findBySongName(name);

//     dispatch({
//       type: RETRIEVE_SONGS,
//       payload: res.data.songs,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const updateSong = (id, data) => async (dispatch) => {
//   try {
//     const res = await SongService.update(id, data);

//     dispatch({
//       type: UPDATE_SONG,
//       payload: data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };
