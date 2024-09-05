import React from "react";
import { useState } from "react";

const UserPhoto = "/assets/img/catanacomics.svg";

export default function Usuario() {

    const [name, setname] = useState("catanacomics");

    function mudarNome() {
        let novoNome = prompt("Insira seu novo nome de usuário");
        if (!novoNome) return alert("Insira um nome válido")
        setname(novoNome);
    }

    return (

        <div className="usuario">
            <img src={UserPhoto} alt="Foto de perfil do usuário" />
            <div className="user-info">
                <p>{name}</p>
                <span>
                    <p>Catana <button className="editar" onClick={mudarNome}><ion-icon name="pencil-outline"></ion-icon></button></p>
                </span>
            </div>
        </div>

    )

}