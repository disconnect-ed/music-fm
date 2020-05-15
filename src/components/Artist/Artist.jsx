import React from "react";
import ArtistSimilar from "./ArtistItem/ArtistSimilar";
import ArtistInfo from "./ArtistItem/ArtistInfo";
import Albums from "../common/Albums/Albums";
import Tracks from "../common/Tracks/Tracks";

const Artist = (props) => {
    return (
        <div className='artist-wrapper'>
            <ArtistInfo artistInfo={props.artistInfo}/>
            <Tracks trackList={props.artistTopTracks} title={'Популярные треки исполнителя'} />
            <Albums albumsList={props.artistTopAlbums} title={'Альбомы'} />
            <ArtistSimilar artistSimilar={props.artistSimilar}/>
        </div>
    )

}

export default Artist;