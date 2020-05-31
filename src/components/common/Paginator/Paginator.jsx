import React, {useState} from "react";
import {Pagination} from "react-bootstrap";

const Paginator = ({onPageChanged, ...props}) => {

    let totalPages = Math.ceil(props.totalResults / props.pageSize);
    let page = props.page;
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    let portionSize = 5;
    let portionCount = Math.ceil(totalPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <>
            <Pagination>
                {portionNumber > 1 &&
                <Pagination.Prev onClick={() => { setPortionNumber(portionNumber - 1) }} /> }

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                    return  <Pagination.Item key={p} active={page == p ? true : false} onClick={(e) => {onPageChanged(p)}}>{p}</Pagination.Item>
                })}

                {portionCount > portionNumber &&
                <Pagination.Next onClick={() => { setPortionNumber(portionNumber + 1) }} /> }

            </Pagination>
        </>
    )
}

export default Paginator;