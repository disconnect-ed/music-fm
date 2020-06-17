
export const SET_TRACK_NAME_LIST = 'SET_TRACK_NAME_LIST';
export const SET_TRACK_LIST = 'SET_TRACK_LIST';
export const SET_TRACK_LIST_ERROR = 'SET_TRACK_LIST_ERROR';
export const TRACK_LIST_IS_LOADING = 'TRACK_LIST_IS_LOADING';


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

export default trackListReducer;