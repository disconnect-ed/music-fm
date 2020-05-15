import React from "react";
import {NavLink} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const Friends = (props) => {
    if (props.friendsList) {
        return (
            <div>
                <h2 className=" mb-4">Друзья пользователя {props.title}</h2>
                <div className="row">
                    {props.friendsList.map(result => {
                        const  imgSrc = result.image[1]['#text'];
                        return <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
                            <div className="artistslist-card">
                                <div className="text-center artistslist-card__img">
                                    <NavLink to={`/userProfile/${result.name}`}>
                                        <img src={imgSrc}
                                             alt={result.name}/>
                                    </NavLink>
                                </div>
                                <div className="artistslist-card__info">
                                        <NavLink to={`/user/profile/${result.name}`}>{result.name}</NavLink>
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

export default Friends