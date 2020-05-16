import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";

class NavBarContainer extends React.Component {

    render() {
        return (
            <NavBar artistId={this.props.artistId} albumId={this.props.albumId}
                    trackName={this.props.trackName} trackArtistName={this.props.trackArtistName}
                    authUserName={this.props.authUserName} authUser={this.props.authUser}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        artistId: state.artist.artistId,
        albumId: state.album.albumId,
        trackName: state.track.trackName,
        trackArtistName: state.track.trackArtistName,
        authUserName: state.user.authUserName,
        authUser: state.auth.authUser,
    }
}

export default connect(mapStateToProps)(NavBarContainer);