import React from "react";
import {connect} from "react-redux";
import {getGeoTopArtist, getGeoTopTracks} from "../../redux/actions/geo-action";
import {Container} from "react-bootstrap";
import Main from "./Main";
import {getChartTopArtists, getChartTopTracks} from "../../redux/actions/chart-action";
import {withRouter} from "react-router-dom";

class MainContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getChartTopArtists();
        this.props.getGeoTopArtist();
        this.props.getChartTopTracks();
        this.props.getGeoTopTracks();
    }

    render() {
        return (
            <Container>
                <Main geoTopArtists={this.props.geoTopArtists} chartTopArtists={this.props.chartTopArtists}
                      chartTopTracks={this.props.chartTopTracks} geoTopTracks={this.props.geoTopTracks}/>
            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        chartTopArtists: state.chart.chartTopArtists,
        geoTopArtists: state.geo.geoTopArtists,
        chartTopTracks: state.chart.chartTopTracks,
        geoTopTracks: state.geo.geoTopTracks,
    }
}

let urlDataContainer = withRouter(MainContainer)

export default connect(mapStateToProps, {getGeoTopArtist, getChartTopArtists,
    getChartTopTracks, getGeoTopTracks,})(urlDataContainer);