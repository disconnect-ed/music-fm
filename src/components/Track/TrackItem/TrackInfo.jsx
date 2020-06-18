import React from "react";
import {NavLink} from "react-router-dom";

const TrackInfo = (props) => {

    return (
        <div className="artist-info pt-5">
            <div className="row">
                <div className="col-lg-4 col-12 text-center">
                    <div className="artist-info__img">
                        <img src={props.trackInfo.album ? Object.values(props.trackInfo.album.image[3])[0] : ''}
                             alt=""/>
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="artist-info__descr">
                        <h2 className="text-lg-left text-center">
                            {props.trackInfo.name}
                        </h2>
                        <p className='text-lg-left text-center'>Исполнитель: <NavLink
                            to={props.trackInfo.artist.mbid ? `/artists/${props.trackInfo.artist.mbid}` : `#`}>{props.trackInfo.artist.name}</NavLink>
                        </p>
                        {props.trackInfo.album &&
                        <p className='text-lg-left text-center'>Альбом: <NavLink
                            to={props.trackInfo.album.mbid ? `/albums/${props.trackInfo.album.mbid}` : `#`}>{props.trackInfo.album.title}</NavLink>
                        </p>
                        }
                        {(props.trackInfo.album && props.trackInfo.album['@attr']) &&
                        <p className="text-lg-left text-center">
                            Номер трека в альбоме: {props.trackInfo.album['@attr'].position}
                        </p>
                        }
                        <p className="text-lg-left text-center">
                            Слушателей: {props.trackInfo.listeners}
                        </p>
                        <p className="text-lg-left text-center">
                            Прослушиваний: {props.trackInfo.playcount}
                        </p>
                        <p className="text-lg-left text-center">
                            Жанр: {props.trackInfo.toptags.tag.map(result => {
                            return <b key={result.name}>{result.name}, </b>
                        })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default TrackInfo;