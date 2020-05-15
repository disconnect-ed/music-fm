import React from "react";
import {Spinner, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const ArtistTopTracks = (props) => {
    if (props.artistTopTracks) {
        return (
            <div className='artist-toptracks' >
                <h2 className="chart-top__title mb-4">Популярные треки исполнителя</h2>
                <Table striped bordered hover size="sm">
                    <tbody>
                    <tr>
                        <th>Обложка</th>
                        <th>Трек</th>
                        <th>Исполнитель</th>
                        <th>Прослушиваний</th>
                    </tr>
                    {props.artistTopTracks.map(result => {
                        return <tr>
                            <td><img src={Object.values(result.image[0])[0]} alt=""/></td>
                            <td>{result.name}</td>
                            <td><NavLink to={'/'} >{result.artist.name}</NavLink></td>
                            <td>{result.playcount}</td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
        )
    } else {
        return <Spinner className='spinner' animation="border" />
    }

}

export default ArtistTopTracks;