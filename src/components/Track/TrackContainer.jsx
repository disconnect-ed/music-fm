import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Track from "./Track";
import {getSimilarTracks, getTrackInfo, getTrackParams} from "../../redux/track-reducer";
import {Container} from "react-bootstrap";

class TrackContainer extends React.PureComponent {

    componentDidMount() {
        let trackArtistName = this.props.match.params.trackArtistName;
        let trackName = this.props.match.params.trackName;
        this.props.getTrackParams(trackName, trackArtistName);
        this.props.getTrackInfo(trackName, trackArtistName);
        this.props.getSimilarTracks(trackName, trackArtistName);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.trackArtistName !== prevProps.trackArtistName
        || this.props.match.params.trackName !== prevProps.trackName) {
            let trackArtistName = this.props.match.params.trackArtistName;
            let trackName = this.props.match.params.trackName;
            this.props.getTrackParams(trackName, trackArtistName);
            this.props.getTrackInfo(trackName, trackArtistName);
            this.props.getSimilarTracks(trackName, trackArtistName);
        }
    }

    render() {
        return (
            <Container>
                <Track similarTracks={this.props.similarTracks} trackInfo={this.props.trackInfo} />
            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        trackName: state.track.trackName,
        trackArtistName: state.track.trackArtistName,
        trackInfo: state.track.trackInfo,
        similarTracks: state.track.similarTracks,
    }
}

let urlDataContainer = withRouter(TrackContainer)

export default connect(mapStateToProps, {getSimilarTracks, getTrackInfo, getTrackParams})(urlDataContainer);