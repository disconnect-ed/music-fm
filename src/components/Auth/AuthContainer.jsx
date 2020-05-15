import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getAuthHash, getAuthToken, getSessionData} from "../../redux/auth-reducer";
import Auth from "./Auth";
import md5 from 'md5';

class AuthContainer extends React.PureComponent {

    componentDidMount() {
        let token = this.props.location.search;
        let authData = this.authData(token);
        this.props.getAuthToken(authData[0]);
        this.props.getAuthHash(authData[1]);
        this.props.getSessionData(authData[0], authData[1])
    }

    authData(token) {
        let myToken = new URLSearchParams(token);
        let tokenValue = myToken.get('token');
        let authHash = md5(`api_key${this.props.apiKey}methodauth.getSessiontoken${tokenValue}${this.props.apiSecret}`);
        let answer = [tokenValue, authHash];
        return answer;
    }

    render() {
        return (
            <Auth authUser={this.props.authUser} param={this.props.location.search} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        apiKey: state.auth.apiKey,
        apiSecret: state.auth.apiSecret,
        authUser: state.auth.authUser
    }
}

let urlDataContainer = withRouter(AuthContainer)

export default connect(mapStateToProps, {getAuthHash, getAuthToken, getSessionData})(urlDataContainer)