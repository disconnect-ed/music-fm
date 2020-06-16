import {chartAPI} from "../../api/api";
import {setChartTopArtists, setChartTopTracks} from "../reducers/chart-reducer";

export const getChartTopArtists = () => {
    return (dispatch) => {
        chartAPI.getTopArtists().then(response => {
            dispatch(setChartTopArtists(response.data.artists.artist))
        })
    }
}

export const getChartTopTracks = () => {
    return (dispatch) => {
        chartAPI.getTopTracks().then(response => {
            dispatch(setChartTopTracks(response.data.tracks.track))
        })
    }
}