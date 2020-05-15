import React from "react";
import {Container} from "react-bootstrap";
import AlbumsListOnLoad from "./AlbumsListOnLoad";
import {connect} from "react-redux";
import {getAlbum, getAlbumName} from "../../redux/albumsList-reducer";
import Albums from "../common/Albums/Albums";
import Searcher from "../common/Searcher/Searcher";
import {getChartTopArtists} from "../../redux/chart-reducer";
import {getGeoTopArtist} from "../../redux/geo-reducer";

class AlbumsListContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getChartTopArtists();
        this.props.getGeoTopArtist();
    }

    render() {
        return (
            <Container>
                <Searcher getName={this.props.getAlbumName} getList={this.props.getAlbum} name={this.props.albumName} title={'Введите название альбома'}/>
                {this.props.album ?
                    <Albums albumsList={this.props.album} title={'Результаты поиска'} /> :
                    <AlbumsListOnLoad chartTopArtists={this.props.chartTopArtists} geoTopArtists={this.props.geoTopArtists} />
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
    }
}

export default connect(mapStateToProps, {getAlbumName, getAlbum, getChartTopArtists, getGeoTopArtist})(AlbumsListContainer);