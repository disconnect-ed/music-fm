import React from "react";
import {Container} from "react-bootstrap";
import AlbumsListOnLoad from "./AlbumsListOnLoad";
import {connect} from "react-redux";
import {getAlbumList, getAlbumName} from "../../redux/actions/albumsList-action";
import Searcher from "../common/Searcher/Searcher";
import {getChartTopArtists} from "../../redux/actions/chart-action";
import {getGeoTopArtist} from "../../redux/actions/geo-action";
import AlbumsList from "./AlbumsList";

class AlbumsListContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getChartTopArtists();
        this.props.getGeoTopArtist();
    }

    onPageChanged = (page) => {
        this.props.getAlbumList(this.props.albumName, page);
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <Container>
                <Searcher getName={this.props.getAlbumName} getList={this.props.getAlbumList}
                          name={this.props.albumName} error={this.props.albumListError}
                          title={'Введите название альбома'}/>
                {this.props.album ?
                    <AlbumsList albumListIsLoading={this.props.albumListIsLoading} albumsList={this.props.album}
                                title={'Результаты поиска'} onPageChanged={this.onPageChanged} page={this.props.page}
                                totalResults={this.props.totalResults} pageSize={this.props.pageSize}
                    />
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
        albumListError: state.albumList.albumListError,
        pageSize: state.albumList.pageSize,
        albumListIsLoading: state.albumList.albumListIsLoading

    }
}

export default connect(mapStateToProps, {
    getAlbumName,
    getAlbumList,
    getChartTopArtists,
    getGeoTopArtist
})(AlbumsListContainer);