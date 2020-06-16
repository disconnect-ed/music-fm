import React from "react";
import {connect} from "react-redux";
import {getTrackList, getTrackNameList} from "../../redux/actions/trackList-action";
import {Container} from "react-bootstrap";
import TrackList from "./TrackList";
import Searcher from "../common/Searcher/Searcher";
import TrackListOnLoad from "./TrackListOnLoad";
import {getChartTopTracks} from "../../redux/actions/chart-action";
import {getGeoTopTracks} from "../../redux/actions/geo-action";

class TrackListContainer extends React.PureComponent {

    componentDidMount() {
        if (!this.props.geoTopTracks) {
            this.props.getGeoTopTracks();
        }
        if (!this.props.chartTopTracks) {
            this.props.getChartTopTracks();
        }
    }

    onPageChanged = (page) => {
        this.props.getTrackList(this.props.trackNameList, page);
        window.scrollTo(0, 0)
    }

    render() {



        return (
            <Container>
                <Searcher getName={this.props.getTrackNameList} getList={this.props.getTrackList}
                          name={this.props.trackNameList} title={'Введите название трека'}
                          error={this.props.trackListError}
                />
                {this.props.trackList ?
                        <TrackList trackList={this.props.trackList}
                                   title={'Результат поиска'} onPageChanged={this.onPageChanged} page={this.props.page}
                                   totalResults={this.props.totalResults} pageSize={this.props.pageSize}
                                   trackListIsLoading={this.props.trackListIsLoading}
                        />

                    :
                    <TrackListOnLoad chartTopTracks={this.props.chartTopTracks} geoTopTracks={this.props.geoTopTracks}/>
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
        totalResults: state.trackList.totalResults,
        page: state.trackList.page,
        pageSize: state.trackList.pageSize,
        trackListIsLoading: state.trackList.trackListIsLoading,
    }
}

export default connect(mapStateToProps, {
    getTrackNameList,
    getTrackList,
    getChartTopTracks,
    getGeoTopTracks
})(TrackListContainer);