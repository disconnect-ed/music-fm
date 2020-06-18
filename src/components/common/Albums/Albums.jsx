import React from "react";
import {NavLink} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const Albums = (props) => {

    if (!props.albumsList) return <Spinner className='spinner' animation="border"/>

    return (

            <div className="artistslist-wrapper pt-5">
                <h2 className="artistslist__title mb-4">{props.title}</h2>
                <div className="row">
                    {props.albumsList.map(result => {
                        const imgSrc = result.image[2]['#text'];
                        return <div key={props.albumsList.indexOf(result)} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className="artistslist-card">
                                <div className="card__img">
                                    <NavLink to={result.mbid ? `/albums/${result.mbid}` : '#'}>
                                        <img className='cover' src={imgSrc ? imgSrc : './default.png'}
                                             alt={Object.values(result.image[2])[1]}/>
                                    </NavLink>
                                </div>
                                <div className="artistslist-card__info">
                                    {result.mbid ?
                                        <NavLink to={`/albums/${result.mbid}`}>{result.name}</NavLink> :
                                        <p>{result.name}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
    )
}

export default Albums;