export function onChangeKeyInput() {

    const keyInput = document.querySelector("#key")

    if (keyInput.value !== "") {
        keyInput.classList.remove("is-invalid")
    }

    if (keyInput.hasAttribute("readonly") === false) {
        let regKeyInput = /^[a-zA-Z0-9_]+$/;
        if (!regKeyInput.test(keyInput.value) && keyInput.value.length > 0) {
            keyInput.classList.add("is-invalid")
            keyInput.nextSibling.innerHTML = "Поле ключа может содержать только буквы английского алфавита, цифры и знак нижнего подчеркивания"
        } else if (keyInput.value.length === 0) {
            keyInput.classList.add("is-invalid")
            keyInput.nextSibling.innerHTML = "Поле обязательно для заполнения"
        } else {
            keyInput.classList.add("is-valid")
            keyInput.nextSibling.innerHTML = "Поле обязательно для заполнения"
        }
    }
}

export function onChangeRuInput() {

    const translateRuInput = document.querySelector("#translateRu")

    if (translateRuInput.value !== "") {
        translateRuInput.classList.remove("is-invalid")
    }

    let regTranslateRuInput = /^[а-яА-Я ]+$/;
    if (!regTranslateRuInput.test(translateRuInput.value) && translateRuInput.value.length > 0 && translateRuInput.value.trim().length > 0) {
        translateRuInput.classList.add("is-invalid")
        translateRuInput.nextSibling.innerHTML = "Поле русского перевода может содержать только буквы русского алфавита и пробелы"
    } else if (translateRuInput.value.length === 0 || translateRuInput.value.trim().length === 0) {
        translateRuInput.classList.add("is-invalid")
        translateRuInput.nextSibling.innerHTML = "Поле обязательно для заполнения"
    } else {
        translateRuInput.classList.add("is-valid")
        translateRuInput.nextSibling.innerHTML = "Поле обязательно для заполнения"
    }
}


export function onChangeEngInput() {

    const translateEngInput = document.querySelector("#translateEng")

    if (translateEngInput.value !== "") {
        translateEngInput.classList.remove("is-invalid")
    }

    if (translateEngInput.hasAttribute("readonly") === false) {
        let regtranslateEngInput = /^[a-zA-Z ]+$/;
        if (!regtranslateEngInput.test(translateEngInput.value) && translateEngInput.value.length > 0) {
            translateEngInput.classList.add("is-invalid")
            translateEngInput.nextSibling.innerHTML = "Поле английского перевода может содержать только буквы английского алфавита и пробелы"
        } else if (translateEngInput.value.length === 0) {
            translateEngInput.classList.add("is-invalid")
            translateEngInput.nextSibling.innerHTML = "Поле обязательно для заполнения"
        } else {
            translateEngInput.classList.add("is-valid")
            translateEngInput.nextSibling.innerHTML = "Поле обязательно для заполнения"
        }
    }
}