import React from "react"
import Navbar from "./Navbar"
import Loader from "../Loader/Loader"
import { connect } from "react-redux"
import { changeRole, fetchNav } from "../../store/actions/auth"

class NavbarRender extends React.Component {
    componentDidMount() {
        this.props.fetchNav()
    }

    changeRoleHandler = (event) => {
        const newRole = event.target.getAttribute("data-role")
        this.props.changeRole(newRole)
    }

    render() {
        return (
            <Navbar
                currentRole = {
                    this.props.loading
                        ? <Loader isLoaderSmall={true}></Loader>
                        : this.props.roles.moderator ? "модератор" : "редактор"
                }
                moderatorActive = {this.props.roles.moderator ? "active" : ""}
                editorActive = {this.props.roles.editor ? "active" : ""}
                changeRole = { this.changeRoleHandler }
                isHideRole = {this.props.isHideRole}
            >
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return {
        roles: state.auth.rolesData,
        loading: state.auth.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeRole: (newRole) => dispatch(changeRole(newRole)),
        fetchNav: () => dispatch(fetchNav())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarRender)