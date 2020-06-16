import React from "react";
import AlbumInfo from "./AlbumItem/AlbumInfo";
import AlbumTracks from "./AlbumItem/AlbumTracks";
import {Spinner} from "react-bootstrap";
import Error from "../common/Error/Error";

const Album = (props) => {

    if (props.albumIsLoading) return <Spinner className='spinner' animation="border" />

    if (props.albumError) return <Error error={props.albumError}/>

    // if (props.albumsError) return <Error error={props.albumError}/>

    return (
        <>
            <AlbumInfo albumInfo={props.albumInfo} />
            <AlbumTracks albumTracks={props.albumTracks} />
        </>
    )
}

export default Album;