import React from "react"
import { Link } from "react-router-dom"

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="container">
                <Link to="/main-table" className="navbar-brand mb-0 h1 text-primary">Translate-admin</Link>
                {
                    props.isHideRole
                    ?   null
                    :   <div className="dropdown">
                            <button 
                                className="btn btn-outline-primary btn-sm dropdown-toggle" 
                                type="button" id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                    <i className="fas fa-user mr-2"></i> Текущая роль: {props.currentRole}
                            </button>
                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <button 
                                    className={`dropdown-item ${props.moderatorActive}`} 
                                    onClick={props.changeRole} 
                                    data-role="moderator">
                                        Модератор</button>
                                <button 
                                    className={`dropdown-item ${props.editorActive}`} 
                                    onClick={props.changeRole} 
                                    data-role="editor">
                                        Редактор</button>
                            </div>
                        </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;