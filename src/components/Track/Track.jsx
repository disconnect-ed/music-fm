import React from "react";
import TrackInfo from "./TrackItem/TrackInfo";
import Tracks from "../common/Tracks/Tracks";

const Track = (props) => {
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