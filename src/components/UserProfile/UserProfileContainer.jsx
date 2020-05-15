import React from "react";
import {connect} from "react-redux";
import {Button, Container} from "react-bootstrap";
import {getUserInfo} from "../../redux/user-reducer";
import {NavLink, Route, Switch, withRouter} from "react-router-dom";
import AuthUserProfileContainer from "./UserProfileItems/UserContainer";
import FriendsContainer from "./UserProfileItems/FriendsContainer";

class UserProfileContainer extends React.PureComponent {




    render() {
        return (
            <Container>
                <div className="row pt-4">
                    <div className="col-2">
                        <aside className="profile-menu">
                            <h3>Привет, {this.props.authUserName}!</h3>
                            <ul>
                                <li><NavLink to={`/user/profile/${this.props.authUserName}`}>Мой профиль</NavLink></li>
                                <li><NavLink to={`/user/friends/${this.props.authUserName}`} >Мои друзья</NavLink></li>
                            </ul>
                            <Button className='btn-danger' >Выйти</Button>
                        </aside>
                    </div>
                    <div className="col-10">

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
        authUserName: state.user.authUserName
    }
}

let urlDataContainer = withRouter(UserProfileContainer)

export default connect(mapStateToProps, {getUserInfo})(urlDataContainer);