import React from "react";
import {Redirect} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const Auth = (props) => {
    if (props.param) {
        if (props.authUser) {
            return <Redirect to='/main'/>
        }
        return <div className='auth-loading'>
            <Spinner className='spinner' animation="border"/>
        </div>
    } else {
        return <Redirect to='/main'/>
    }
}

export default Auth;