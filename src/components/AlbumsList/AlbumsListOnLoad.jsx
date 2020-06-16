import React from "react";
import Artists from "../common/Artists/Artists";

const AlbumsListOnLoad = (props) => {

    if (!props.chartTopArtists && !props.geoTopArtists) return null

    return (
        <>
            <Artists artistsList={props.chartTopArtists} title={'Популярные исполнители'} />
            <Artists artistsList={props.geoTopArtists} title={'Популярные исполнители в вашем регионе'} />
        </>
    )
}

export default AlbumsListOnLoad;