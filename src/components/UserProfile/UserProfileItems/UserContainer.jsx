import React from "react";
import {connect} from "react-redux";
import Profile from "../../common/Profile/Profile";
import {
    getCurrentUser,
    getLovedTracks,
    getUserInfo,
    getUserTopAlbums,
    getUserTopArtists
} from "../../../redux/user-reducer";
import Tracks from "../../common/Tracks/Tracks";
import Artists from "../../common/Artists/Artists";
import Albums from "../../common/Albums/Albums";
import {withRouter} from "react-router-dom";

class UserContainer extends React.PureComponent {

    componentDidMount() {
        const user = this.props.match.params.user;
        if (user) {
            this.props.getUserInfo(user);
            this.props.getLovedTracks(user);
            this.props.getUserTopArtists(user);
            this.props.getUserTopAlbums(user);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const user = this.props.match.params.user;
        const currentUser = this.props.currentUser;
        if (user !== currentUser) {
            this.props.getUserInfo(user);
            this.props.getLovedTracks(user);
            this.props.getUserTopArtists(user);
            this.props.getUserTopAlbums(user);
            this.props.getCurrentUser(user);
        }
    }

    render() {
        return (
            <>
                <Profile userInfo={this.props.userInfo} lovedTracks={this.props.lovedTracks}/>
                <Artists artistsList={this.props.userTopArtists} title={'Любимые артисты'} />
                <Albums albumsList={this.props.userTopAlbums} title={'Любимые альбомы'} />
                <Tracks trackList={this.props.lovedTracks} title={'Любимые треки'} delete={true} deleteListeners={true}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authUserName: state.user.authUserName,
        userInfo: state.user.userInfo,
        lovedTracks: state.user.lovedTracks,
        userTopArtists: state.user.userTopArtists,
        userTopAlbums: state.user.userTopAlbums,
        currentUser: state.user.currentUser,
    }
}

let urlDataContainer = withRouter(UserContainer);

export default connect(mapStateToProps, {getUserInfo, getLovedTracks, getUserTopArtists, getUserTopAlbums, getCurrentUser})(urlDataContainer);