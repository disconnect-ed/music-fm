import {geoAPI} from "../api/api";

const SET_GEO_TOP_ARTISTS = 'SET_GEO_TOP_ARTISTS';
const SET_GEO_TOP_TRACKS = 'SET_GEO_TOP_TRACKS';


let initialState = {
    geoTopArtists: null,
    geoTopTracks: null,
}

const geoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GEO_TOP_ARTISTS:
            return {
                ...state,
                geoTopArtists: action.geoTopArtists
            };
        case SET_GEO_TOP_TRACKS:
            return {
                ...state,
                geoTopTracks: action.geoTopTracks
            };
        default:
            return state
    }
}

export const setGeoTopArtist = (geoTopArtists) => ({type: SET_GEO_TOP_ARTISTS, geoTopArtists});
export const setGeoTopTracks = (geoTopTracks) => ({type: SET_GEO_TOP_TRACKS, geoTopTracks});

export const getGeoTopArtist = () => {
    return (dispatch) => {
        geoAPI.getTopArtist().then(response => {
            dispatch(setGeoTopArtist(response.data.topartists.artist))
        })
    }
}

export const getGeoTopTracks = () => {
    return (dispatch) => {
        geoAPI.getTopTracks().then(response => {
            dispatch(setGeoTopTracks(response.data.tracks.track))
        })
    }
}

export default  geoReducer;

