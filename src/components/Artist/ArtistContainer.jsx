import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getArtistId,
    getArtistInfo,
    getArtistSimilar,
    getArtistTopAlbums,
    getArtistTopTracks
} from "../../redux/artist-reducer";
import Artist from "./Artist";
import {getArtistTopAlbumsData} from "../../redux/selectors";
import Paginator from "../common/Paginator/Paginator";

class ArtistContainer extends React.PureComponent {

    componentDidMount() {
        let artistId = this.props.match.params.artistId;
        this.props.getArtistId(artistId);
        this.props.getArtistInfo(artistId);
        this.props.getArtistSimilar(artistId);
        this.props.getArtistTopTracks(artistId);
        this.props.getArtistTopAlbums(artistId);
        window.scrollTo(0, 0);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.artistId !== prevProps.artistId) {
            let artistId = this.props.match.params.artistId;
            this.props.getArtistId(artistId);
            this.props.getArtistInfo(artistId);
            this.props.getArtistSimilar(artistId);
            this.props.getArtistTopTracks(artistId);
            this.props.getArtistTopAlbums(artistId);
        }
    }

    onPageChanged = (page) => {
        this.props.getArtistTopAlbums(this.props.artistId, page);
    }

    render() {
        return (
            <Container>
                <Artist artistSimilar={this.props.artistSimilar} artistId={this.props.artistId} artistInfo={this.props.artistInfo}
                        artistTopTracks={this.props.artistTopTracks} artistTopAlbums={this.props.artistTopAlbums}
                        onPageChanged={this.onPageChanged} page={this.props.albumsPage}
                        totalResults={this.props.albumsTotalResults} pageSize={this.props.albumsPageSize}
                />
            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        artistId: state.artist.artistId,
        artistInfo: state.artist.artistInfo,
        artistSimilar: state.artist.artistSimilar,
        artistTopTracks: state.artist.artistTopTracks,
        albumsTotalResults: state.artist.albumsTotalResults,
        albumsPage: state.artist.albumsPage,
        albumsPageSize: state.artist.albumsPageSize,
        artistTopAlbums: getArtistTopAlbumsData(state),
    }
}

let urlDataContainer = withRouter(ArtistContainer)

export default connect(mapStateToProps, {getArtistId, getArtistInfo, getArtistSimilar, getArtistTopAlbums, getArtistTopTracks})(urlDataContainer);