import React from "react";
import Artists from "../common/Artists/Artists";
import Paginator from "../common/Paginator/Paginator";
import {Spinner} from "react-bootstrap";
import Error from "../common/Error/Error";

const ArtistsList = (props) => {

    if (props.artistListIsLoading) return <Spinner className='spinner' animation="border" />

    if (props.artistListError) return <Error error={props.artistListError} />

    return (
        <>
            <Artists artistsList={props.artistsList} title={props.title}/>
            <div className="d-flex justify-content-center pb-3">
                <Paginator onPageChanged={props.onPageChanged} page={props.page}
                           totalResults={props.totalResults} pageSize={props.pageSize}/>
            </div>
        </>


    )
}

export default ArtistsList