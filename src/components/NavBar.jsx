import React from "react"

const LogoInsta = "/assets/img/logo.png";

export default function NavBar() {

    return (

        <div className="container">
            <div className="logo-area">
                <ion-icon name="logo-instagram"></ion-icon>
                <span className="separador"></span>
                <img src={LogoInsta} alt="Logo do Instagram" />
            </div>
            <div className="campoPesquisa">
                <p>Pesquisar</p>
            </div>
            <div className="icones-usuario">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>

    )

}