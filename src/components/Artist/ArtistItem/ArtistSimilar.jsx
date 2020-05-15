import React from "react";
import {NavLink} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const ArtistSimilar = (props) => {

    const onClick = () => {
        window.scrollTo(0, 0);
    };

    if (props.artistSimilar) {
        return (
            <div className="artist-similar">
                <h2 className="artist-similar__title mb-4">Похожие исполнители</h2>
                <div className="row">
                    {props.artistSimilar.map(result => {
                        return <div className="col-lg-4 col-md-6 mb-3">
                            <div className="artist-similar-info">
                                    <span className="artist-similar-info__img pr-3">
                                        <NavLink onClick={onClick} to={result.mbid ? `/artists/${result.mbid}` : '#'} >
                                            <img src={Object.values(result.image[1])[0]} alt=""/>
                                        </NavLink>

                                    </span>
                                {result.mbid ?
                                    <NavLink onClick={onClick} to={`/artists/${result.mbid}`} >{result.name}</NavLink>
                                    :
                                    <p className='inline'>{result.name}</p>
                                }

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

export default ArtistSimilar;