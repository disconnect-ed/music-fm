import React from "react";
import Friends from "../../common/Friends/Friends";
import {connect} from "react-redux";
import {getCurrentUser, getUserFriends} from "../../../redux/user-reducer";
import {withRouter} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";

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

    onPageChanged = (page) => {
        this.props.getUserFriends(this.props.currentUser, page);
        window.scrollTo(0,0);
    }

    render() {
        return (
            <>
            <Friends friendsList={this.props.userFriends} title={this.props.match.params.user}/>
                <div className="d-flex justify-content-center pb-3">
                    <Paginator onPageChanged={this.onPageChanged} page={this.props.friendsPage}
                               totalResults={this.props.friendsTotalResults} pageSize={this.props.friendsPageSize}/>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userFriends: state.user.userFriends,
        authUserName: state.user.authUserName,
        currentUser: state.user.currentUser,
        friendsTotalResults: state.user.friendsTotalResults,
        friendsPage: state.user.friendsPage,
        friendsPageSize: state.user.friendsPageSize,
    }
}

let urlDataContainer = withRouter(FriendsContainer)

export default connect(mapStateToProps, {getUserFriends, getCurrentUser})(urlDataContainer);