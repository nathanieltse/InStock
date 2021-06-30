import React from 'react'
import "./MainHeader.scss"
import backArrow from "../../assets/Icons/arrow_back-24px.svg"

function MainHeader({navigate, headerName}) {

    const navigateBack = (e) => {
        navigate.history.goBack()
    }
    
    return (
        <div className="main-header">
            <img
                onClick = {navigateBack}
                className="main-header__img"
                src={backArrow}
                alt="Arrow Icon to go back a page"
            />
            <h1 className="main-header__title">{headerName}</h1>
        </div>
    )
}

export default MainHeader
