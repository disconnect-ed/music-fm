import {geoAPI} from "../../api/api";
import {SET_GEO_TOP_ARTISTS, SET_GEO_TOP_TRACKS} from "../reducers/geo-reducer";

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