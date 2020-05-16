import React from "react";
import {NavLink} from "react-router-dom";
import './ArtistsList.css'
import {Spinner} from "react-bootstrap";
import Paginator from "../Paginator/Paginator";

const Artists = (props) => {
    if (props.artistsList) {
        return (
            <div className="artistslist-wrapper">
                <h2 className="artistslist__title mb-4">{props.title}</h2>
                <div className="row">
                    {props.artistsList.map(result => {
                        const  imgSrc = result.image[2]['#text'];
                        return <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className="artistslist-card">
                                <div className="artistslist-card__img">
                                    <NavLink to={result.mbid ? `/artists/${result.mbid}` : '#'}>
                                        <img className='cover' src={imgSrc ? imgSrc : './default.png'}
                                             alt={result.name}/>
                                    </NavLink>
                                </div>
                                <div className="artistslist-card__info">
                                    {result.mbid ?
                                        <NavLink to={`/artists/${result.mbid}`}>{result.name}</NavLink> :
                                        <p>{result.name}</p>
                                    }
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    } else {
        return <Spinner className='spinner' animation="border" />
    }

}

export default Artists;