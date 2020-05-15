import React from "react";
import Friends from "../../common/Friends/Friends";
import {connect} from "react-redux";
import {getCurrentUser, getUserFriends} from "../../../redux/user-reducer";
import {withRouter} from "react-router-dom";

class FriendsContainer extends React.PureComponent {

    componentDidMount() {
        const user = this.props.match.params.user;
        if (user) {
            this.props.getUserFriends(user);
            this.props.getCurrentUser(user);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const user = this.props.match.params.user;
        const currentUser = this.props.currentUser;
        if (user !== currentUser) {
            this.props.getUserFriends(user);
            this.props.getCurrentUser(user);
        }
    }

    render() {
        return (
            <Friends friendsList={this.props.userFriends} title={this.props.match.params.user}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userFriends: state.user.userFriends,
        authUserName: state.user.authUserName,
        currentUser: state.user.currentUser,
    }
}

let urlDataContainer = withRouter(FriendsContainer)

export default connect(mapStateToProps, {getUserFriends, getCurrentUser})(urlDataContainer);