import React from "react";
import {connect} from "react-redux";
import {Container} from "react-bootstrap";
import {userLogout} from "../../redux/actions/user-action";
import {Redirect, Route, withRouter} from "react-router-dom";
import AuthUserProfileContainer from "./UserProfileItems/UserContainer";
import FriendsContainer from "./UserProfileItems/FriendsContainer";
import {logout} from "../../redux/actions/auth-action";
import UserNavBar from "./UserProfileItems/UserNavBar";
import './UserProfile.css'

class UserProfileContainer extends React.Component {

    render() {
        if (!localStorage.getItem('musicFmUser')) {
            return <Redirect to='/main'/>
        }
        return (
            <Container key={this.props.authUserName}>
                <div className="row pt-4">
                    <div className="col-md-12  col-lg-2 pr-lg-0 mb-3">
                        <UserNavBar authUser={this.props.authUser} userLogout={this.props.userLogout}
                                    logout={this.props.logout}/>
                    </div>
                    <div className="col-12 col-lg-10">

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

export default connect(mapStateToProps, {logout, userLogout})(urlDataContainer);