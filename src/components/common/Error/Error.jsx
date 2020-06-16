import React from "react";

const Error = (props) => {
    return (
        <div className='text-center m-auto pt-4 pb-4'>
            <h4>Произошла ошибка!</h4>
            <h5 style={{color: 'red'}}>{props.error}</h5>
        </div>
    )
}

export default Error