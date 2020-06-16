import {trackAPI} from "../../api/api";
import {
    setSimilarTracks,
    setTrackArtistName,
    setTrackError,
    setTrackInfo,
    setTrackName,
    tracksIsLoading
} from "../reducers/track-reducer";

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