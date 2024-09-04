import React from "react";

const UserPhoto = "/assets/img/catanacomics.svg";

export default function Usuario() {

    return (

        <div class="usuario">
            <img src= {UserPhoto} alt="Foto de perfil do usuário"/>
            <p>catanacomics</p>
            <p>Catana</p>
        </div>

    )

}