import React from "react"
import { Link } from "react-router-dom"

function TableRow(props) {
    return (
        <tr>
            <td className="align-middle">{props.translateKey}</td>
            <td className="align-middle">{props.translateRu}</td>
            <td className="align-middle">{props.translateEng}</td>
            <td className="align-middle">
                {
                    props.isTranslateDone 
                        ? <span className="badge badge-pill badge-success">Переведено</span>
                        : <span className="badge badge-pill badge-danger">Не переведено</span>
                }
            </td>
            <td className="align-middle date-row">{props.translateDate}</td>
            <td className="align-middle">
                <Link
                    to={`/edit-translation/${props.translateKey}`} 
                    type="button" 
                    className="btn btn-link btn-sm d-block" 
                    style={{"textAlign": "left"}}
                    data-target-key={props.translateKey} 
                    onClick={props.onClickEdit}>
                        <i className="far fa-edit"></i> Редактировать
                </Link>
                <button 
                    type="button" 
                    className="btn btn-link btn-sm d-block" 
                    data-target-key={props.translateKey} 
                    onClick={props.onClickDelete} 
                    >
                        <i className="far fa-trash-alt"></i> Удалить
                </button>
            </td>
        </tr>
    )
}

export default TableRow