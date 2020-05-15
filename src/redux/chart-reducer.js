import {chartAPI} from "../api/api";

const SET_CHART_TOP_ARTISTS = 'SET_CHART_TOP_ARTISTS';
const SET_CHART_TOP_TRACKS = 'SET_CHART_TOP_TRACKS';

let initialState = {
    chartTopArtists: null,
    chartTopTracks: null,
}

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHART_TOP_ARTISTS:
            return {
                ...state,
                chartTopArtists: action.chartTopArtists
            }
        case SET_CHART_TOP_TRACKS:
            return {
                ...state,
                chartTopTracks: action.chartTopTracks
            }
        default:
            return state
    }
}

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

export default chartReducer;