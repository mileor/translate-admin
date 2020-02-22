import React from "react"

function Loader(props) {
    return (
        <div className={`spinner-border ${props.isLoaderSmall ? "spinner-border-sm" : null}`} role="status">
            <span className="sr-only">Загрузка...</span>
        </div>
    )
}

export default Loader;