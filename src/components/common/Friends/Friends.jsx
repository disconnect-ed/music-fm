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
                        const imgSrc = result.image[2]['#text'];
                        return <div className="col-12 mb-5">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <NavLink to={`/user/profile/${result.name}`}>
                                        <img src={imgSrc}
                                             alt={result.name}/>
                                    </NavLink>
                                </div>
                                <div className="col-7">
                                    <h4><NavLink to={`/user/profile/${result.name}`}>{result.name}</NavLink></h4>
                                    {result.realname !== "" &&
                                    <p className='mt-3'>Настоящее имя: {result.realname}</p>
                                    }
                                    {result.country !== "None" &&
                                    <p className='mt-2'>Страна: {result.country}</p>
                                    }
                                    {result.registered['#text'] !== "" &&
                                    <p className='mt-2'>Дата регистрации: {result.registered['#text']}</p>
                                    }

                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    } else {
        return <Spinner className='spinner' animation="border"/>
    }
}

export default Friends