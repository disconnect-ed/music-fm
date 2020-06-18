import React from "react";
import {Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AlbumTracks = (props) => {

    return (
        <div className='artist-toptracks pt-5 pb-5'>
            <h2 className="chart-top__title mb-4">Популярные треки исполнителя</h2>
            <Table striped bordered hover size="sm">
                <tbody>
                <tr>
                    <th>Номер</th>
                    <th>Трек</th>
                    <th>Исполнитель</th>
                </tr>
                {props.albumTracks.map(result => {
                    return <tr key={props.albumTracks.indexOf(result)}>
                        <td><b>{props.albumTracks.indexOf(result) + 1}</b></td>
                        <td><NavLink to={`/tracks/${result.artist.name}/${result.name}`}>{result.name}</NavLink></td>
                        <td><NavLink to={`/artists/${result.artist.mbid}`}>{result.artist.name}</NavLink></td>
                    </tr>
                })}
                </tbody>
            </Table>
        </div>
    )


}

export default AlbumTracks;