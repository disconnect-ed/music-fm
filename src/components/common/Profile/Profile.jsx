import React from "react";
import {Spinner} from "react-bootstrap";
import Tracks from "../Tracks/Tracks";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
    if (props.userInfo) {

        return (
            <div className='row mb-5' >
                <div className="col-12 col-lg-6 col-xl-5 text-center">
                    <img className='avatar' src={props.userInfo.image[3]['#text']} alt=""/>
                </div>
                <div className=" col-12 col-lg-6 col-xl-7 text-lg-left text-center">
                    <h2>{props.userInfo.name}</h2>
                    {props.userInfo.realname !== '' &&
                    <p>Настоящее имя: {props.userInfo.realname}</p>
                    }
                    {props.userInfo.country !== 'None' &&
                    <p>Страна: {props.userInfo.country}</p>
                    }
                    <p>Прослушиваний: <b>{props.userInfo.playcount}</b></p>
                    <h5 className='friends'><NavLink to={`/user/friends/${props.userInfo.name}`} >Друзья пользователя {props.userInfo.name}</NavLink></h5>
                </div>
            </div>
        )
    } else {
        return <Spinner className='spinner' animation="border" />
    }
}

export default Profile;