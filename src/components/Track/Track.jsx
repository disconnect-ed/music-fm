import React from "react";
import TrackInfo from "./TrackItem/TrackInfo";
import Tracks from "../common/Tracks/Tracks";
import {Spinner} from "react-bootstrap";
import Error from "../common/Error/Error";

const Track = (props) => {

    if (props.tracksIsLoading) return <Spinner className='spinner' animation="border" />

    if (props.trackError) return <Error error={props.trackError} />

    return (
        <>
        <TrackInfo trackInfo={props.trackInfo} />
        <h2 className='mt-5' >Похожие треки</h2>
        <div className="similar-tracklist">
            <Tracks deleteListeners={true} trackList={props.similarTracks} />
        </div>
        </>
    )
}

export default Track;