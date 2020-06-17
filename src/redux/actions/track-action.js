import {trackAPI} from "../../api/api";
import {
    SET_SIMILAR_TRACKS,
    SET_TRACK_ARTIST_NAME, SET_TRACK_ERROR,
    SET_TRACK_INFO,
    SET_TRACK_NAME,
    TRACKS_IS_LOADING
} from "../reducers/track-reducer";

export const setTrackName = (trackName) => ({type: SET_TRACK_NAME, trackName});
export const setTrackArtistName = (trackArtistName) => ({type: SET_TRACK_ARTIST_NAME, trackArtistName});
export const setTrackInfo = (trackInfo) => ({type: SET_TRACK_INFO, trackInfo});
export const setSimilarTracks = (similarTracks) => ({type: SET_SIMILAR_TRACKS, similarTracks});
export const tracksIsLoading = (bool) => ({type: TRACKS_IS_LOADING, bool});
export const setTrackError = (error = 'Попробуйте позже') => ({type: SET_TRACK_ERROR, error})

export const getTrackParams = (trackName, trackArtistName) => {
    return (dispatch) => {
        dispatch(setTrackName(trackName));
        dispatch(setTrackArtistName(trackArtistName));
    }
}

// export const getTrackInfo = (trackName, trackArtistName) => {
//
//     return (dispatch) => {
//         trackAPI.getInfo(trackArtistName, trackName).then(response => {
//             dispatch(setTrackInfo(response.data.track))
//         })
//     }
// }
//
// export const getSimilarTracks = (trackName, trackArtistName) => {
//
//     return (dispatch) => {
//         trackAPI.getSimilar(trackArtistName, trackName).then(response => {
//             dispatch(setSimilarTracks(response.data.similartracks.track))
//         })
//     }
// }

export const info = (trackName, trackArtistName) => {
    return trackAPI.getInfo(trackArtistName, trackName)
}

export const tracks = (trackName, trackArtistName) => {
    return trackAPI.getSimilar(trackArtistName, trackName)
}

export const getTrackData = (trackName, trackArtistName) => {
    return (dispatch) => {
        dispatch(tracksIsLoading(true))
        Promise.all([info(trackName, trackArtistName), tracks(trackName, trackArtistName)]).then(
            response => {
                if (response[0].data.error) {
                    dispatch(setTrackError(response[0].data.message))
                    dispatch(tracksIsLoading(false))
                    return
                }
                dispatch(setTrackError(null))
                dispatch(setTrackInfo(response[0].data.track))
                dispatch(setSimilarTracks(response[1].data.similartracks.track))
                dispatch(tracksIsLoading(false))
            },
            error => {
                dispatch(setTrackError())
                dispatch(tracksIsLoading(false))
            }
        )
    }
}