import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";

class NavBarContainer extends React.Component {
    render() {
        return (
            <NavBar artistId={this.props.artistId} albumId={this.props.albumId}
                    trackName={this.props.trackName} trackArtistName={this.props.trackArtistName}
                    authUserName={this.props.authUserName}
                    authHref={this.props.authHref}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        artistId: state.artist.artistId,
        albumId: state.album.albumId,
        trackName: state.track.trackName,
        trackArtistName: state.track.trackArtistName,
        authHref: state.auth.authHref,
        authUserName: state.user.authUserName
    }
}

export default connect(mapStateToProps)(NavBarContainer);