import React from "react";
import {connect} from "react-redux";
import {getTrackList, getTrackNameList} from "../../redux/trackList-reducer";
import {Container} from "react-bootstrap";
import TrackList from "./TrackList";
import Searcher from "../common/Searcher/Searcher";
import TrackListOnLoad from "./TrackListOnLoad";
import {getChartTopTracks} from "../../redux/chart-reducer";
import {getGeoTopTracks} from "../../redux/geo-reducer";

class TrackListContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getChartTopTracks();
        this.props.getGeoTopTracks();
    }

    render() {
        return (
            <Container>
                <Searcher getName={this.props.getTrackNameList} getList={this.props.getTrackList} name={this.props.trackNameList} title={'Введите название трека'}/>
                {this.props.trackList ?
                    <TrackList trackListError={this.props.trackListError} trackList={this.props.trackList} title={'Результат поиска'} /> :
                    <TrackListOnLoad chartTopTracks={this.props.chartTopTracks} geoTopTracks={this.props.geoTopTracks} />
                }
            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        trackNameList: state.trackList.trackNameList,
        trackList: state.trackList.trackList,
        trackListError: state.trackList.trackListError,
        chartTopTracks: state.chart.chartTopTracks,
        geoTopTracks: state.geo.geoTopTracks,
    }
}

export default connect(mapStateToProps, {getTrackNameList, getTrackList, getChartTopTracks, getGeoTopTracks})(TrackListContainer);