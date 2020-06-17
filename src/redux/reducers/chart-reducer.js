
export const SET_CHART_TOP_ARTISTS = 'SET_CHART_TOP_ARTISTS';
export const SET_CHART_TOP_TRACKS = 'SET_CHART_TOP_TRACKS';

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

export default chartReducer;