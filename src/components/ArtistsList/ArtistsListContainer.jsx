import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {getArtist, getArtistName} from "../../redux/atistList-reducer";
import Artists from "../common/Artists/Artists";
import {getChartTopArtists} from "../../redux/chart-reducer";
import {getGeoTopArtist} from "../../redux/geo-reducer";
import ArtistsListOnLoad from "./ArtistsListOnLoad";
import Searcher from "../common/Searcher/Searcher";

class ArtistsListContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getChartTopArtists();
        this.props.getGeoTopArtist();
    }

    render() {
        return (
            <Container>
                <Searcher getName={this.props.getArtistName} getList={this.props.getArtist} name={this.props.artistName} title={'Введите имя исполнителя'}/>
                {this.props.artist ?
                    <Artists artistsList={this.props.artist} title={'Результаты поиска'} />
                    :
                    <ArtistsListOnLoad chartTopArtists={this.props.chartTopArtists} geoTopArtists={this.props.geoTopArtists} />
                }



            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        artistName: state.artistList.artistName,
        artist: state.artistList.artist,
        chartTopArtists: state.chart.chartTopArtists,
        geoTopArtists: state.geo.geoTopArtists,
    }
}

export default connect(mapStateToProps, {getArtistName, getArtist, getChartTopArtists,
    getGeoTopArtist})(ArtistsListContainer);