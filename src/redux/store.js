import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import albumReducer from "./reducers/album-reducer";
import geoReducer from "./reducers/geo-reducer";
import chartReducer from "./reducers/chart-reducer";
import artistReducer from "./reducers/artist-reducer";
import artistListReducer from "./reducers/atistList-reducer";
import trackReducer from "./reducers/track-reducer";
import albumsListReducer from "./reducers/albumsList-reducer";
import trackListReducer from "./reducers/trackList-reducer";
import userReducer from "./reducers/user-reducer";
import authReducer from "./reducers/auth-reducer";


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