import React from "react";
import {Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const TrackList = (props) => {

    if (props.trackList && props.trackList.length !== 0) {
        return (
            <div className="chart-top-wrapper pb-5">
                <h2 className="chart-top__title mb-4">{props.title}</h2>
                <Table striped bordered hover size="sm">

                    <tbody>
                    <tr>
                        <th>Обложка</th>
                        <th>Трек</th>
                        <th>Исполнитель</th>
                        <th>Слушателей</th>
                    </tr>
                    {props.trackList.map(result => {
                        return <tr>
                            <td><img src={Object.values(result.image[0])[0]} alt=""/></td>
                            <td><NavLink to={`/tracks/${result.artist}/${result.name}`}>{result.name}</NavLink></td>
                            <td>
                                <NavLink to={`/artists/${result.artist}`} >{result.artist}</NavLink>
                            </td>
                            <td>{result.listeners || '-'}</td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
        )
    } else {
        return <div className='text-center' ><h5 className='error' >{props.trackListError}</h5></div>
    }
}

export default TrackList;