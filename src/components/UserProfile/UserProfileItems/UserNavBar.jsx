import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const UserNavBar = (props) => {

    const onClick = () => {
        props.logout();
        props.userLogout();
    }

    return (
        <aside className="profile-menu text-center m-auto">
            <h4>Привет, {props.authUser}!</h4>
            <ul className='d-lg-block d-flex justify-content-around' >
                <li><NavLink to={`/user/profile/${props.authUser}`}>Мой профиль</NavLink></li>
                <li><NavLink to={`/user/friends/${props.authUser}`} >Мои друзья</NavLink></li>
            </ul>
            <Button className='btn-danger ' onClick={onClick} >Выйти</Button>
        </aside>
    )
}

export default UserNavBar;