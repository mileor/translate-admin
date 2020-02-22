import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { choiceRole } from "../../store/actions/auth"

class Authorization extends React.Component {

    choiceRoleHandler = (event) => {
        const role = event.target.getAttribute("data-role-choice")
        this.props.choiceRole(role)
    }

    render() {
        return (
            <div className="container text-center">
                <h1 style={{"marginTop": 120}}>Авторизация (дэмо)</h1>
                <Link 
                    to="/main-table" 
                    onClick={ this.choiceRoleHandler } 
                    data-role-choice="moderator" 
                    type="button" 
                    className="btn btn-primary mt-5 d-block w-25 mx-auto autn-btn">
                        <i className="fas fa-sign-in-alt mr-1"></i> Войти как модератор
                </Link>
                <Link 
                    to="/main-table" 
                    onClick={ this.choiceRoleHandler } 
                    data-role-choice="editor" 
                    type="button" 
                    className="btn btn-primary mt-4 d-block w-25 mx-auto autn-btn">
                        <i className="fas fa-sign-in-alt mr-1"></i> Войти как редактор
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        roles: state.auth.rolesData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        choiceRole: (role) => dispatch(choiceRole(role)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)