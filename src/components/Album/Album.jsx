import React from "react";
import AlbumInfo from "./AlbumItem/AlbumInfo";
import AlbumTracks from "./AlbumItem/AlbumTracks";

const Album = (props) => {

    return (
        <>
            <AlbumInfo albumInfo={props.albumInfo} />
            <AlbumTracks albumTracks={props.albumTracks} />
        </>
    )
}

export default Album;