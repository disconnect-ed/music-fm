import React from "react";
import Albums from "../common/Albums/Albums";
import Paginator from "../common/Paginator/Paginator";
import {Spinner} from "react-bootstrap";

const AlbumsList = (props) => {

    if (props.albumListIsLoading) return <Spinner className='spinner' animation="border"/>

    return (
        <>
            <Albums albumsList={props.albumsList} title={'Результаты поиска'} />
            <div className="d-flex justify-content-center pb-3">
                <Paginator onPageChanged={props.onPageChanged} page={props.page}
                           totalResults={props.totalResults} pageSize={props.pageSize}/>
            </div>
        </>
    )
}

export default AlbumsList