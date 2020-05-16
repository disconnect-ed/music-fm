import React from "react";
import {Spinner, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Tracks = (props) => {
    if (props.trackList) {
        return (
            <div className="chart-top-wrapper pb-2">
                <h2 className="chart-top__title mb-4">{props.title}</h2>
                <Table className='table-responsive-md' striped bordered hover size="sm">
                    <tbody>
                    <tr>
                        <th>Обложка</th>
                        <th>Трек</th>
                        <th>Исполнитель</th>
                        {props.delete ? '' : <th>Прослушиваний</th>}
                        {props.deleteListeners ? '' : <th>Слушателей</th>}
                    </tr>
                    {props.trackList.map(result => {
                        return <tr>
                            <td><img src={result.image[0]['#text']} alt=""/></td>
                            <td><NavLink to={`/tracks/${result.artist.name}/${result.name}`}>{result.name}</NavLink>
                            </td>
                            <td>{result.artist.mbid ?
                                <NavLink to={`/artists/${result.artist.mbid}`}>{result.artist.name}</NavLink>
                                :
                                <p>{result.artist.name}</p>
                            }
                            </td>
                            {props.delete ? '' : <td>{result.playcount || '-'}</td>}
                            {props.deleteListeners ? '' : <td>{result.listeners || '-'}</td>}
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

export default Tracks;