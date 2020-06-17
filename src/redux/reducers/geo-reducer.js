
export const SET_GEO_TOP_ARTISTS = 'SET_GEO_TOP_ARTISTS';
export const SET_GEO_TOP_TRACKS = 'SET_GEO_TOP_TRACKS';


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

export default  geoReducer;

