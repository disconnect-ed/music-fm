import React from "react";
import {Spinner} from "react-bootstrap";
import Tracks from "../Tracks/Tracks";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    if (props.userInfo) {
        debugger
        return (
            <div className='row mb-5' >
                <div className="col-5 text-center">
                    <img src={props.userInfo.image[3]['#text']} alt=""/>
                </div>
                <div className="col-7">
                    <h2>{props.userInfo.name}</h2>
                    <p>Настоящее имя: {props.userInfo.realname}</p>
                    <p>Страна: {props.userInfo.country}</p>
                    <p>Прослушиваний: <b>{props.userInfo.playcount}</b></p>
                    <h6><NavLink to={`/user/friends/${props.userInfo.name}`} >Друзья пользователя {props.userInfo.name}</NavLink></h6>
                </div>
            </div>
        )
    } else {
        return <Spinner className='spinner' animation="border" />
    }
}

export default Profile;