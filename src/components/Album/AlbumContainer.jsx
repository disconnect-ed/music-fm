import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getAlbumId, getAlbumInfo} from "../../redux/actions/album-action";
import Album from "./Album";
import {Container} from "react-bootstrap";

class AlbumContainer extends React.Component {

    componentDidMount() {
        let albumId = this.props.match.params.albumsId;
        this.props.getAlbumId(albumId);
        this.props.getAlbumInfo(albumId);
        window.scrollTo(0,0)
    }

    render() {

        return (
            <Container>
                <Album albumInfo={this.props.albumInfo} albumTracks={this.props.albumTracks}
                       albumIsLoading={this.props.albumIsLoading} albumError={this.props.albumError}
                />
            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        albumId: state.album.albumId,
        albumInfo: state.album.albumInfo,
        albumTracks: state.album.albumTracks,
        albumIsLoading: state.album.albumIsLoading,
        albumError: state.album.albumError,
    }
}

let urlDataContainer = withRouter(AlbumContainer)

export default connect(mapStateToProps, {getAlbumId, getAlbumInfo})(urlDataContainer)