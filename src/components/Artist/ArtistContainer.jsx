import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getArtistData,
    getArtistId,
    getArtistTopAlbums,
} from "../../redux/actions/artist-action";
import Artist from "./Artist";
import {getArtistTopAlbumsData} from "../../utils/selectors";

class ArtistContainer extends React.PureComponent {

    componentDidMount() {
        let artistId = this.props.match.params.artistId;
        this.props.getArtistId(artistId);
        this.props.getArtistData(artistId)
        window.scrollTo(0, 0);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.artistId !== prevProps.match.params.artistId) {
            let artistId = this.props.match.params.artistId;
            this.props.getArtistId(artistId);
            this.props.getArtistData(artistId)
        }
    }

    onPageChanged = (page) => {
        this.props.getArtistTopAlbums(this.props.artistId, page);
    }

    render() {
        return (
            <Container>
                <Artist artistSimilar={this.props.artistSimilar} artistId={this.props.artistId}
                        artistInfo={this.props.artistInfo}
                        artistTopTracks={this.props.artistTopTracks} artistTopAlbums={this.props.artistTopAlbums}
                        onPageChanged={this.onPageChanged} page={this.props.albumsPage}
                        totalResults={this.props.albumsTotalResults} pageSize={this.props.albumsPageSize}
                        artistInfoIsLoading={this.props.artistInfoIsLoading} artistError={this.props.artistError}
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
        artistError: state.artist.artistError,
        albumsPageSize: state.artist.albumsPageSize,
        artistTopAlbums: getArtistTopAlbumsData(state),
        artistInfoIsLoading: state.artist.artistInfoIsLoading
    }
}

let urlDataContainer = withRouter(ArtistContainer)

export default connect(mapStateToProps, {getArtistId,
    getArtistTopAlbums, getArtistData})(urlDataContainer);