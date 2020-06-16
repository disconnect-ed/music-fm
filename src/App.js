import React, {Component} from 'react';
import './App.css';
import MainContainer from "./components/Main/MainContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import ArtistContainer from "./components/Artist/ArtistContainer";
import ArtistsListContainer from "./components/ArtistsList/ArtistsListContainer";
import AlbumsContainer from "./components/Album/AlbumContainer";
import TrackContainer from "./components/Track/TrackContainer";
import AlbumsListContainer from "./components/AlbumsList/AlbumsListContainer";
import TrackListContainer from "./components/TrackList/TrackListContainer";
import AuthContainer from "./components/Auth/AuthContainer";
import {connect} from "react-redux";
import {getUserData} from "./redux/actions/user-action";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import {getAuthUser} from "./redux/actions/auth-action";

class App extends Component {

    componentDidMount() {
        const authUserName = this.props.authUserName;
        const authUser = this.props.authUser;
        const userKey = this.props.userKey;
        const localStorageUser = localStorage.getItem('musicFmUser');
        const localStorageKey = localStorage.getItem('musicFmKey');
        if (!(authUserName && userKey && authUser) && (localStorageUser && localStorageKey)) {
            this.props.getUserData(localStorageUser, localStorageKey)
            this.props.getAuthUser(localStorageUser)
        }
    }


    render() {
        return (
            <div className="App">
                <NavBarContainer/>
                <Switch>
                    <Route exact path='/main' render={() => <MainContainer/>}/>
                    <Route exact path='/artists' render={() => <ArtistsListContainer/>}/>
                    <Route exact path='/artists/:artistId' render={() => <ArtistContainer/>}/>
                    <Route exact path='/artists/:artistName' render={() => <ArtistsListContainer/>}/>
                    <Route exact path='/albums/:albumsId' render={() => <AlbumsContainer/>}/>
                    <Route exact path='/albums/' render={() => <AlbumsListContainer/>}/>
                    <Route exact path='/tracks/:trackArtistName/:trackName' render={() => <TrackContainer/>}/>
                    <Route exact path='/tracks' render={() => <TrackListContainer/>}/>
                    <Route exact path='/auth' render={() => <AuthContainer/>}/>
                    <Route path='/user' render={() => <UserProfileContainer />}/>
                    <Route exact path='/' render={() => <Redirect to='/main'/>}/>
                </Switch>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        authUserName: state.user.authUserName,
        authUser: state.auth.authUser,
        userKey: state.user.userKey
    }
}

export default connect(mapStateToProps, {getUserData, getAuthUser})(App);
