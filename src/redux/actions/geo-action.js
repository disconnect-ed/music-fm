import {geoAPI} from "../../api/api";
import {setGeoTopArtist, setGeoTopTracks} from "../reducers/geo-reducer";

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