import React from "react";
import {Container} from "react-bootstrap";
import AlbumsListOnLoad from "./AlbumsListOnLoad";
import {connect} from "react-redux";
import {getAlbum, getAlbumName} from "../../redux/albumsList-reducer";
import Albums from "../common/Albums/Albums";
import Searcher from "../common/Searcher/Searcher";
import {getChartTopArtists} from "../../redux/chart-reducer";
import {getGeoTopArtist} from "../../redux/geo-reducer";
import Paginator from "../common/Paginator/Paginator";

class AlbumsListContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getChartTopArtists();
        this.props.getGeoTopArtist();
    }

    onPageChanged = (page) => {
        this.props.getAlbum(this.props.albumName, page);
        window.scrollTo(0,0)
    }

    render() {
        return (
            <Container>
                <Searcher getName={this.props.getAlbumName} getList={this.props.getAlbum} name={this.props.albumName}
                          title={'Введите название альбома'}/>
                {this.props.album ?
                    <>
                        <Albums albumsList={this.props.album} title={'Результаты поиска'}/>
                        <div className="d-flex justify-content-center pb-3">
                            <Paginator onPageChanged={this.onPageChanged} page={this.props.page}
                                       totalResults={this.props.totalResults} pageSize={this.props.pageSize}/>
                        </div>
                    </>
                    :
                    <AlbumsListOnLoad chartTopArtists={this.props.chartTopArtists}
                                      geoTopArtists={this.props.geoTopArtists}/>
                }

            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        albumName: state.albumList.albumName,
        album: state.albumList.album,
        chartTopArtists: state.chart.chartTopArtists,
        geoTopArtists: state.geo.geoTopArtists,
        totalResults: state.albumList.totalResults,
        page: state.albumList.page,
        pageSize: state.albumList.pageSize,
    }
}

export default connect(mapStateToProps, {
    getAlbumName,
    getAlbum,
    getChartTopArtists,
    getGeoTopArtist
})(AlbumsListContainer);