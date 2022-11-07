// import { CREATE_SONG, RETRIEVE_SONGS, UPDATE_SONG } from "../acts/types";
// const initialState = [];

// function songReducer(songs = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case CREATE_SONG:
//       return [...songs, payload];
//     case RETRIEVE_SONGS:
//       return payload;
//     case UPDATE_SONG:
//       return songs.map((song) => {
//         if (song._id === payload._id) {
//           return {
//             ...song,
//             ...payload,
//           };
//         } else {
//           return song;
//         }
//       });
//     default:
//       return songs;
//   }
// }

// export default songReducer;
