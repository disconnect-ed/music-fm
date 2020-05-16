import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {getArtist, getArtistName} from "../../redux/atistList-reducer";
import Artists from "../common/Artists/Artists";
import {getChartTopArtists} from "../../redux/chart-reducer";
import {getGeoTopArtist} from "../../redux/geo-reducer";
import ArtistsListOnLoad from "./ArtistsListOnLoad";
import Searcher from "../common/Searcher/Searcher";
import Paginator from "../common/Paginator/Paginator";

class ArtistsListContainer extends React.Component {

    componentDidMount() {
        this.props.getChartTopArtists();
        this.props.getGeoTopArtist();
    }

    onPageChanged = (page) => {
        this.props.getArtist(this.props.artistName, page);
        window.scrollTo(0,0)
    }

    render() {
        return (
            <Container>
                <Searcher getName={this.props.getArtistName} getList={this.props.getArtist} name={this.props.artistName}
                          title={'Введите имя исполнителя'}/>
                {this.props.artist ?
                    <>
                        <Artists artistsList={this.props.artist} title={'Результаты поиска'}/>
                        <div className="d-flex justify-content-center pb-3">
                            <Paginator onPageChanged={this.onPageChanged} page={this.props.page}
                                       totalResults={this.props.totalResults} pageSize={this.props.pageSize}/>
                        </div>
                    </>
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
        chartTopArtists: state.chart.chartTopArtists,
        geoTopArtists: state.geo.geoTopArtists,

    }
}

export default connect(mapStateToProps, {
    getArtistName, getArtist, getChartTopArtists,
    getGeoTopArtist
})(ArtistsListContainer);