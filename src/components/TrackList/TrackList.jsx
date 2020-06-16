import React from "react";
import {Spinner, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const TrackList = (props) => {

    if (props.trackListIsLoading) return <Spinner className='spinner' animation="border"/>

    return (
        <>
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
                                <NavLink to={`/artists/${result.artist}`}>{result.artist}</NavLink>
                            </td>
                            <td>{result.listeners || '-'}</td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-center pb-3">
                <Paginator onPageChanged={props.onPageChanged} page={props.page}
                           totalResults={props.totalResults} pageSize={props.pageSize}/>
            </div>
        </>
    )

}

export default TrackList;