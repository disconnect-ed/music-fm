import React from "react";
import Tracks from "../common/Tracks/Tracks";

const TrackListOnLoad = (props) => {
    return (
        <>
            <Tracks trackList={props.chartTopTracks} title={'Популярные треки'} />
            <Tracks trackList={props.geoTopTracks} title={'Популярные треки в вашем регионе'} delete={true} />
        </>
    )
}

export default TrackListOnLoad;