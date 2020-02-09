import React from "react"
import NavbarRender from "../../UI components/Navbar/NavbarRender"
import Input from "../../UI components/Input/Input"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addNewWord } from "../../store/actions/add"
import { onChangeKeyInput, onChangeRuInput } from "../../helperFunctions/forms"

class AddTranslation extends React.Component {

    componentDidMount() {
        window.$('[data-toggle="tooltip"]').tooltip();
    }

    renderInputs = () => {
        return this.props.inputsData.map((input, index) => {
            return (
                <Input
                    key={index}
                    id={input.id}
                    label={input.label}
                    placeholder={input.placeholder}
                    isDisabled={input.isDisabled}
                    onChange={
                        input.id === "key" ?
                            onChangeKeyInput
                        : input.id === "translateRu" ?
                            onChangeRuInput
                        : null
                    }
                    titleTooltip={
                        input.id === "translateEng" && input.isDisabled
                            ? "Данное поле заполняет редактор"
                            : null
                    }
                ></Input>
            )
        })
    }

    showAlert = () => {
        return (
            <div
                className="alert alert-success position-absolute text-center"
                role="alert"
                style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto", width: 360 }}
            >
                Слово успешно добавлено в <Link to="/main-table" className="alert-link">таблицу</Link>
            </div>
        )
    }

    checkSubmitHandler = (event) => {
        event.preventDefault()
        const keyInput = document.querySelector("#key")
        const translateRuInput = document.querySelector("#translateRu")

        if (keyInput.value === "") {
            keyInput.classList.add("is-invalid")
        }

        if (translateRuInput.value === "") {
            translateRuInput.classList.add("is-invalid")
        }

        if (keyInput.classList.contains("is-valid") && translateRuInput.classList.contains("is-valid")) {
            this.props.addNewWord()
            keyInput.classList.remove("is-valid")
            translateRuInput.classList.remove("is-valid")
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavbarRender isHideRole={true}></NavbarRender>
                <div className="container">
                    {
                        this.props.isShowAlert === true
                            ? this.showAlert()
                            : null
                    }
                    <h3 className="mb-5">Добавление слова</h3>
                    <form className="w-50 needs-validation" noValidate>
                        {this.renderInputs()}
                        <button className="btn btn-success" type="submit" onClick={this.checkSubmitHandler}>
                            <i className="fas fa-plus mr-1"></i> Добавить слово
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputsData: state.add.inputsData,
        isShowAlert: state.add.isShowAlert,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewWord: () => dispatch(addNewWord()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTranslation)