import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Error from "../Error/Error";

const Searcher = (props) => {

    const [error, setError] = useState(null);

    const onChange = (e) => {
        props.getName(e.target.value);
    }

    const onClick = () => {
        if (props.name === '') {
            setError('Задан пустой запрос :(')
            return
        }
        setError(null)
        props.getList(props.name)
    }

    return (
        <>
            <div className='artistlist-searcher pt-5 pb-5'>
                <div className='col-lg-5 col-md-8 col-12 m-auto text-center'>
                    <h2 className="artistlist-searcher__title">{props.title}</h2>
                    <div className='input-group'>
                        <input type="text" value={props.name} onChange={onChange} className="form-control"/>
                        <span className="input-group-btn">
                        <Button className='' onClick={onClick}>Поиск</Button>
                    </span>

                    </div>
                </div>
                <div className='text-center pt-3'><h5 className='error'>{error}</h5></div>
                {props.error &&
                <Error error={props.error} />
                }
            </div>

        </>
    )
}

export default Searcher;