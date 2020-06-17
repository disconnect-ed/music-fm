import {chartAPI} from "../../api/api";
import {SET_CHART_TOP_ARTISTS, SET_CHART_TOP_TRACKS} from "../reducers/chart-reducer";

export const setChartTopArtists = (chartTopArtists) => ({type: SET_CHART_TOP_ARTISTS, chartTopArtists})
export const setChartTopTracks = (chartTopTracks) => ({type: SET_CHART_TOP_TRACKS, chartTopTracks})

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