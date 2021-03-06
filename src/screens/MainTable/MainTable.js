import React from "react"
import NavbarRender from "../../UI components/Navbar/NavbarRender"
import Table from "../../UI components/Table/Table"
import TableRow from "../../UI components/Table/TableRow"
import Loader from "../../UI components/Loader/Loader"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { fetchTable, deleteFromTable } from "../../store/actions/table"

class MainTable extends React.Component {

    componentDidMount() {
        this.props.fetchTable()
        document.querySelectorAll(".tooltip").forEach(element => element.remove());
    }

    deleteHandler = (event) => {
        const clickTarget = event.target
        const arr = this.props.translateTableData
        const arrKeys = this.props.translateTableDataKeys
        this.props.deleteFromTable(clickTarget, arr, arrKeys)
    }

    renderRows = () => {
        return this.props.translateTableData.map((row, index) => {
            return (
                <TableRow
                    key={index}
                    translateKey={row.key}
                    translateRu={row.ru}
                    translateEng={row.eng}
                    translateDate={row.date}
                    isTranslateDone={
                        row.ru.length > 0 && row.eng.length > 0
                            ? true
                            : false
                    }
                    onClickDelete={this.deleteHandler}
                    onClickEdit={this.editHandler}
                    isDelete={row.isDelete}
                ></TableRow>
            )
        })
    }

    renderAddBtn = () => {
        if (this.props.roles.moderator === true) {
            return (
                <Link to="/add-translation" type="button" className="btn btn-success float-right add-btn">
                    <i className="fas fa-plus mr-1"></i> Добавить слово
                </Link>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavbarRender></NavbarRender>
                <div className="container">
                    <div className="clearfix">
                        <h3 className="float-left mb-5 main-header">Список слов для перевода</h3>
                        { this.renderAddBtn() }
                    </div>
                    {
                        this.props.loading
                            ? <Loader></Loader>
                            : this.props.translateTableData.length === 0
                                ? <h5 className="text-secondary">Cлова для перевода отсутствуют</h5>
                                : <Table tableRows={ this.renderRows() }></Table>
                    }
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        translateTableData: state.table.translateTableData,
        translateTableDataKeys: state.table.translateTableDataKeys,
        roles: state.auth.rolesData,
        loading: state.table.loading,
        isDelete: state.table.isDelete
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTable: () => dispatch(fetchTable()),
        deleteFromTable: (clickTarget, arr, arrKeys) => dispatch(deleteFromTable(clickTarget, arr, arrKeys))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTable)