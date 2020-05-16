import React from "react";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import {getUserInfo, userLogout} from "../../redux/user-reducer";
import {Redirect, Route, withRouter} from "react-router-dom";
import AuthUserProfileContainer from "./UserProfileItems/UserContainer";
import FriendsContainer from "./UserProfileItems/FriendsContainer";
import {logout} from "../../redux/auth-reducer";
import UserNavBar from "./UserProfileItems/UserNavBar";

class UserProfileContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        if (!localStorage.getItem('musicFmUser')) {
            return <Redirect to='/main'/>
        }
        return (
            <Container key={this.props.authUserName}>
                <div className="row pt-4">
                    <div className="col-3">
                        <UserNavBar authUser={this.props.authUser} userLogout={this.props.userLogout}
                                    logout={this.props.logout}/>
                    </div>
                    <div className="col-9">

                        <Route exact path='/user/profile/:user' render={() => <AuthUserProfileContainer/>}/>
                        <Route exact path='/user/friends/:user' render={() => <FriendsContainer/>}/>

                    </div>
                </div>
            </Container>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        authUser: state.auth.authUser
    }
}

let urlDataContainer = withRouter(UserProfileContainer)

export default connect(mapStateToProps, {getUserInfo, logout, userLogout})(urlDataContainer);