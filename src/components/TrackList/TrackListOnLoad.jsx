import React from "react";
import Tracks from "../common/Tracks/Tracks";

const TrackListOnLoad = (props) => {

    if (!props.chartTopTracks && !props.geoTopTracks) return null

    return (
        <>
            <Tracks trackList={props.chartTopTracks} title={'Популярные треки'} />
            <Tracks trackList={props.geoTopTracks} title={'Популярные треки в вашем регионе'} delete={true} />
        </>
    )
}

export default TrackListOnLoad;