
const SET_TRACK_NAME_LIST = 'SET_TRACK_NAME_LIST';
const SET_TRACK_LIST = 'SET_TRACK_LIST';
const SET_TRACK_LIST_ERROR = 'SET_TRACK_LIST_ERROR';
const TRACK_LIST_IS_LOADING = 'TRACK_LIST_IS_LOADING';


let initialState = {
    trackNameList: '',
    trackList: null,
    trackListError: null,
    totalResults: null,
    page: null,
    pageSize: 20,
    trackListIsLoading: true
}

const trackListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACK_NAME_LIST:
            return {
                ...state,
                trackNameList: action.trackNameList
            }
        case SET_TRACK_LIST:
            return {
                ...state,
                trackList: action.trackList.results.trackmatches.track,
                page: action.trackList.results['opensearch:Query'].startPage,
                totalResults: action.trackList.results['opensearch:totalResults']
            }
        case SET_TRACK_LIST_ERROR:
            return {
                ...state,
                trackListError: action.error
            }
        case TRACK_LIST_IS_LOADING:
            return {
                ...state,
                trackListIsLoading: action.bool
            }
        default:
            return state
    }
}

export const setTrackNameList = (trackNameList) => ({type: SET_TRACK_NAME_LIST, trackNameList});
export const setTrackList = (trackList) => ({type: SET_TRACK_LIST, trackList});
export const trackListIsLoading = (bool) => ({type: TRACK_LIST_IS_LOADING, bool});
export const setTrackListError = (error = 'Попробуйте позже') => ({type: SET_TRACK_LIST_ERROR, error});



export default trackListReducer;