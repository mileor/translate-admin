import React from "react"
import NavbarRender from "../../UI components/Navbar/NavbarRender"
import Input from "../../UI components/Input/Input"
import axios from "axios"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { editWord, fetchEditInputsData } from "../../store/actions/edit"
import { onChangeKeyInput, onChangeRuInput, onChangeEngInput } from "../../helperFunctions/forms"

class EditTranslation extends React.Component {

    componentDidMount() {
        this.renderEditInputsData()
    }

    componentDidUpdate(prevProps) {
        this.tooltipContent()
        if (this.props.roles !== prevProps.roles) {
            this.props.fetchEditInputsData()
        }
    }

    renderEditInputs = () => {
        return this.props.inputsEditData.map((input, index) => {
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
                        : input.id === "translateEng" ? 
                            onChangeEngInput
                        : null
                    }
                ></Input>
            )
        })
    }

    renderEditInputsData = () => {
        const inputKey = this.props.match.params.translateKey
        axios
        .get("https://translate-admin-add74.firebaseio.com/translateTableData.json")
        .then((response) => {
            const arr = Object.values(response.data)

            let itemIndex
            arr.forEach((item, index) => {
                if (item.key === inputKey) {
                    itemIndex = index
                }
                return itemIndex
            })

            const inputs = document.querySelectorAll("input")
            inputs[0].value = arr[itemIndex].key
            inputs[1].value = arr[itemIndex].ru
            inputs[2].value = arr[itemIndex].eng
        })
        .catch((error) => {
            console.log(error)
        })
    }

    checkSubmitHandler = (event) => {
        event.preventDefault()
        const keyInput = document.querySelector("#key")
        const translateEngInput = document.querySelector("#translateEng")
        const translateRuInput = document.querySelector("#translateRu")

        if (translateRuInput.value === "") {
            translateRuInput.classList.add("is-invalid")
        }

        if (!translateRuInput.classList.contains("is-invalid") 
        && !translateEngInput.classList.contains("is-invalid") 
        && !keyInput.classList.contains("is-invalid")) {

            this.editWordHandler()
            translateEngInput.classList.remove("is-valid")
            translateRuInput.classList.remove("is-valid")
            keyInput.classList.remove("is-valid")
        }
    }

    editWordHandler = () => {
        const inputs = document.querySelectorAll("input")
        const inputRuValue = inputs[1].value
        const inputEngValue = inputs[2].value
        const inputKeyValue = inputs[0].value
        const inputKey = this.props.match.params.translateKey

        axios.get("https://translate-admin-add74.firebaseio.com/translateTableData.json")
             .then((response) => {
                 const arr = Object.values(response.data)
                 const arrKeys = Object.keys(response.data)

                 let itemIndex
                 arr.forEach((item, index) => {
                     if (item.key === inputKey) {
                         itemIndex = index
                     }
                     return itemIndex
                 })

                 let editItemKey = arrKeys[itemIndex]
                 const newData = {
                     ...arr[itemIndex],
                     key: inputKeyValue,
                     eng: inputEngValue,
                     ru: inputRuValue
                 }
                 this.props.editWord(newData, editItemKey)
             })
             .catch((error) => {
                 console.log(error)
             })
    }

    showAlert = () => {
        return (
            <div 
                className="alert alert-success position-absolute text-center" 
                role="alert"
                style={{ left: 0, right: 0, marginLeft: "auto", marginRight: "auto", width: 360}}
            >
                Слово успешно отредактировано
                <Link to="/main-table" className="alert-link"> в таблице переводов</Link>
            </div>
        )
    }

    tooltipContent = () => {
        const inputs = document.querySelectorAll("input")
        let currentRole
        if (this.props.roles.editor === true) {
            currentRole = "модератор"
        } else {
            currentRole = "редактор"
        }


        inputs.forEach(element => {
            if (element.hasAttribute("readonly") === true) {
                element.setAttribute('data-original-title', `Данное поле заполняет ${currentRole}`)
            } else {
                element.removeAttribute('data-original-title')
            }
        })
        window.$('[readonly]').tooltip({
            trigger : "hover"
        })
    }

    render() {
        return (
            <React.Fragment>
                <NavbarRender></NavbarRender>
                <div className="container">
                    {
                        this.props.isShowAlert === true
                        ? this.showAlert()
                        : null
                    }
                    <h3 className="mb-5">Редактирование слова</h3>
                    <form className="w-50 needs-validation form-block" noValidate>
                        { this.renderEditInputs() }
                        <button type="submit" className="btn btn-success" onClick={ this.checkSubmitHandler }> 
                            <i className="fas fa-save mr-1"></i> Сохранить изменения
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        inputsEditData: state.edit.inputsEditData,
        isShowAlert: state.edit.isShowAlert,
        roles: state.auth.rolesData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editWord: (newData, editItemKey) => dispatch(editWord(newData, editItemKey)),
        fetchEditInputsData: () => dispatch(fetchEditInputsData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTranslation)