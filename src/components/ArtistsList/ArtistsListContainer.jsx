import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {getArtist, getArtistName} from "../../redux/actions/atistList-action";
import {getChartTopArtists} from "../../redux/actions/chart-action";
import {getGeoTopArtist} from "../../redux/actions/geo-action";
import ArtistsListOnLoad from "./ArtistsListOnLoad";
import Searcher from "../common/Searcher/Searcher";
import ArtistsList from "./ArtistsList";

class ArtistsListContainer extends React.Component {

    componentDidMount() {
        if (!this.props.chartTopArtists) {
            this.props.getChartTopArtists();
        }
        if (!this.props.geoTopArtists) {
            this.props.getGeoTopArtist();
        }
    }

    onPageChanged = (page) => {
        this.props.getArtist(this.props.artistName, page);
        window.scrollTo(0,0)
    }

    render() {



        return (
            <Container>
                <Searcher getName={this.props.getArtistName} getList={this.props.getArtist} name={this.props.artistName}
                          title={'Введите имя исполнителя'} error={this.props.artistListError}/>
                {this.props.artist ?
                    <ArtistsList artistsList={this.props.artist} title={'Результаты поиска'}
                                 onPageChanged={this.onPageChanged} page={this.props.page}
                                 totalResults={this.props.totalResults} pageSize={this.props.pageSize}
                                 artistListIsLoading={this.props.artistListIsLoading}
                    />
                    :
                    <ArtistsListOnLoad chartTopArtists={this.props.chartTopArtists}
                                       geoTopArtists={this.props.geoTopArtists}/>
                }


            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        artistName: state.artistList.artistName,
        artist: state.artistList.artist,
        totalResults: state.artistList.totalResults,
        page: state.artistList.page,
        pageSize: state.artistList.pageSize,
        artistListError: state.artistList.artistListError,
        artistListIsLoading: state.artistList.artistListIsLoading,
        chartTopArtists: state.chart.chartTopArtists,
        geoTopArtists: state.geo.geoTopArtists,

    }
}

export default connect(mapStateToProps, {
    getArtistName, getArtist, getChartTopArtists,
    getGeoTopArtist
})(ArtistsListContainer);