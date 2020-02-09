import React from "react"

function Table(props) {
    return (
        <table className="table table-striped mb-5">
            <thead className="thead-dark">
                <tr>
                    <th className="align-middle" scope="col">Ключ</th>
                    <th className="align-middle" scope="col">Русский перевод</th>
                    <th className="align-middle" scope="col">Английский перевод</th>
                    <th className="align-middle" scope="col">Статус</th>
                    <th className="align-middle" scope="col">Дата создания</th>
                    <th className="align-middle" scope="col">Действия</th>
                </tr>
            </thead>
            <tbody>
                {props.tableRows}
            </tbody>
        </table>
    )
}

export default Table;