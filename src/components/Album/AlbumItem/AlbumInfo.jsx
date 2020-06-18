import React from "react";

const AlbumInfo = (props) => {

    return (
        <div className="artist-info pt-5">
            <div className="row">
                <div className="col-lg-4 col-12 text-center">
                    <div className="artist-info__img">
                        <img src={Object.values(props.albumInfo.image[4])[0]} alt=""/>
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="artist-info__descr">
                        <h2 className="text-lg-left text-center">
                            {props.albumInfo.name}
                        </h2>
                        <p className="text-lg-left text-center">
                            Исполнитель: {props.albumInfo.artist}
                        </p>
                        <p className="text-lg-left text-center">
                            Слушателей: {props.albumInfo.listeners}
                        </p>
                        <p className="text-lg-left text-center">
                            Прослушиваний: {props.albumInfo.playcount}
                        </p>
                        <p className="text-lg-left text-center">
                            Теги: {props.albumInfo.tags.tag.map(result => {
                            return <b key={result.name}>{result.name}, </b>
                        })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AlbumInfo;