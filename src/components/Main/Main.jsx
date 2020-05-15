import React from "react";
import Artists from "../common/Artists/Artists";
import Tracks from "../common/Tracks/Tracks";

const Main = (props) => {
    return (
        <>
            <div className="col-12 pt-5 mb-5 text-center">
                <h1 className="main-title">Приложение MUSIC-FM</h1>
                <p className="main-text">Ищите любимые альбомы, находите похожих исполнителей, читайте их биографию в
                    приложении <b>MUSIC-FM</b></p>
            </div>
            <Artists artistsList={props.chartTopArtists} title={'Популярные исполнители'} />
            <Tracks trackList={props.chartTopTracks} title={'Популярные треки'} />
            <Artists artistsList={props.geoTopArtists} title={'Популярные исполнители в вашем регионе'} />
            <Tracks trackList={props.geoTopTracks} title={'Популярные треки в вашем регионе'} delete={true} />
        </>
    )
}

export default Main;