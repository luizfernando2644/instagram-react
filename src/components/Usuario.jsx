import React from "react";

const UserPhoto = "/assets/img/catanacomics.svg";

export default function Usuario() {

    return (

        <div className="usuario">
            <img src= { UserPhoto } alt="Foto de perfil do usuário"/>
            <div className="user-info">
                <p>catanacomics</p>
                <span>
                    <p>Catana <ion-icon name="pencil-outline"></ion-icon></p>
                </span>
            </div>
        </div>

    )

}