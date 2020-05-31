import React, {useState} from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = (props) => {

    const [state, setState] = useState(false);

    const onClick = () => {
        setState(!state);
    }
    const authHref = 'http://www.last.fm/api/auth/?api_key=a1976dd334d85d2a880225cfe49e652c&cb=http://localhost:3000/auth';
    return (
        <Navbar className='nav' bg='dark'>
            <Navbar.Brand href='/'><h3 className='nav-title'>MUSIC-FM</h3></Navbar.Brand>
            <Nav className='nav-list ml-auto d-none d-lg-flex'>
                <ul>
                    <li><NavLink to='/main'>Главная</NavLink></li>
                    <li>
                        <NavLink className='nav-list__link_custom' to='/artists'>Исполнители</NavLink>
                        <div className="nav-list-hover">
                            <NavLink to='/artists'>Поиск по исполнителям</NavLink>
                            {props.artistId &&
                            <NavLink to={'/artists/' + props.artistId}>Текущий исполнитель</NavLink>
                            }

                        </div>
                    </li>
                    <li>
                        <NavLink className='nav-list__link_custom' to='/albums'>Альбомы</NavLink>
                        <div className="nav-list-hover">
                            <NavLink to='/albums'>Поиск по альбомам</NavLink>
                            {props.albumId &&
                            <NavLink to={'/albums/' + props.albumId}>Текущий альбом</NavLink>
                            }

                        </div>
                    </li>
                    <li>
                        <NavLink className='nav-list__link_custom' to='/tracks'>Треки</NavLink>
                        <div className="nav-list-hover">
                            <NavLink to='/tracks'>Поиск по трекам</NavLink>
                            {(props.trackName && props.trackArtistName) &&
                            <NavLink to={`/tracks/${props.trackArtistName}/${props.trackName}`}>Текущий трек</NavLink>
                            }
                        </div>
                    </li>
                    <li >
                        {(props.authUser) ?
                            <NavLink to={`/user/profile/${props.authUser}`} >Мой профиль</NavLink> :
                            <a target='_blank' href={authHref}>Войти</a>
                        }
                    </li>
                </ul>

            </Nav>
            <div className="nav-menu">
                <Button onClick={onClick} className='btn-nav d-lg-none'>Меню</Button>
                <div className={`nav-menu-wrap ${state ? 'd-flex' : 'd-none'}`}>
                    <Button onClick={onClick} className='btn-menu btn-danger'>&#10006;</Button>
                    <h3 className='nav-title pt-3 pb-3'>Меню</h3>
                    <NavLink className='mb-3' to='/main'>Главная</NavLink>
                    <NavLink className='mb-3' to='/artists'>Исполнители</NavLink>
                    <NavLink className='mb-3' to='/albums'>Альбомы</NavLink>
                    <NavLink className='mb-3' to='/tracks'>Треки</NavLink>
                    {(props.authUser) ?
                        <NavLink to={`/user/profile/${props.authUser}`} >Мой профиль</NavLink> :
                        <a target='_blank' href={authHref}>Войти</a>
                    }
                </div>
            </div>
        </Navbar>
    )
}

export default NavBar;