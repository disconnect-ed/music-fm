import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import albumReducer from "./album-reducer";
import geoReducer from "./geo-reducer";
import chartReducer from "./chart-reducer";
import artistReducer from "./artist-reducer";
import artistListReducer from "./atistList-reducer";
import trackReducer from "./track-reducer";
import albumsListReducer from "./albumsList-reducer";
import trackListReducer from "./trackList-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    album: albumReducer,
    geo: geoReducer,
    chart: chartReducer,
    artist: artistReducer,
    artistList: artistListReducer,
    albumList: albumsListReducer,
    track: trackReducer,
    trackList: trackListReducer,
    user: userReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;