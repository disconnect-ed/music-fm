import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Track from "./Track";
import {getTrackData, getTrackParams} from "../../redux/actions/track-action";
import {Container} from "react-bootstrap";

class TrackContainer extends React.PureComponent {

    componentDidMount() {
        let trackArtistName = this.props.match.params.trackArtistName;
        let trackName = this.props.match.params.trackName;
        this.props.getTrackParams(trackName, trackArtistName);
        this.props.getTrackData(trackName, trackArtistName);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.trackArtistName !== prevProps.match.params.trackArtistName
        || this.props.match.params.trackName !== prevProps.match.params.trackName) {
            let trackArtistName = this.props.match.params.trackArtistName;
            let trackName = this.props.match.params.trackName;
            this.props.getTrackParams(trackName, trackArtistName);
            this.props.getTrackData(trackName, trackArtistName);
        }
    }

    render() {
        return (
            <Container>
                <Track similarTracks={this.props.similarTracks} trackInfo={this.props.trackInfo}
                       tracksIsLoading={this.props.tracksIsLoading} trackError={this.props.trackError}
                />
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
        tracksIsLoading: state.track.tracksIsLoading,
        trackError: state.track.trackError,
    }
}

let urlDataContainer = withRouter(TrackContainer)

export default connect(mapStateToProps, {getTrackData, getTrackParams})(urlDataContainer);