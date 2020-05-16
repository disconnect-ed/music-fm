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
import Paginator from "../../common/Paginator/Paginator";

class UserContainer extends React.Component {

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
            window.scrollTo(0,0);
        }
    }

    artistsPageChanged = (page) => {
        this.props.getUserTopArtists(this.props.currentUser, page);
    }

    albumsPageChanged = (page) => {
        this.props.getUserTopAlbums(this.props.currentUser, page);
    }

    tracksPageChanged = (page) => {
        this.props.getLovedTracks(this.props.currentUser, page);
    }

    render() {
        return (
            <>
                <Profile userInfo={this.props.userInfo} lovedTracks={this.props.lovedTracks}/>
                <>
                    <Artists artistsList={this.props.userTopArtists} title={'Любимые артисты'}/>
                    <div className="d-flex justify-content-center pb-3">
                        <Paginator onPageChanged={this.artistsPageChanged} page={this.props.artistsPage}
                                   totalResults={this.props.artistsTotalResults} pageSize={this.props.artistsPageSize}/>
                    </div>
                </>
                <>
                    <Albums albumsList={this.props.userTopAlbums} title={'Любимые альбомы'}/>
                    <div className="d-flex justify-content-center pb-3">
                        <Paginator onPageChanged={this.albumsPageChanged} page={this.props.albumsPage}
                                   totalResults={this.props.albumsTotalResults} pageSize={this.props.albumsPageSize}/>
                    </div>
                </>
                <>
                    <Tracks trackList={this.props.lovedTracks} title={'Любимые треки'} delete={true}
                            deleteListeners={true}/>
                    <div className="d-flex justify-content-center pb-3">
                        <Paginator onPageChanged={this.tracksPageChanged} page={this.props.tracksPage}
                                   totalResults={this.props.tracksTotalResults} pageSize={this.props.tracksPageSize}/>
                    </div>
                </>
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
        artistsTotalResults: state.user.artistsTotalResults,
        artistsPage: state.user.artistsPage,
        artistsPageSize: state.user.artistsPageSize,
        albumsTotalResults: state.user.albumsTotalResults,
        albumsPage: state.user.albumsPage,
        albumsPageSize: state.user.albumsPageSize,
        tracksTotalResults: state.user.tracksTotalResults,
        tracksPage: state.user.tracksPage,
        tracksPageSize: state.user.tracksPageSize,
    }
}

let urlDataContainer = withRouter(UserContainer);

export default connect(mapStateToProps, {
    getUserInfo,
    getLovedTracks,
    getUserTopArtists,
    getUserTopAlbums,
    getCurrentUser
})(urlDataContainer);