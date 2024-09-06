import React from "react";
import { useState } from "react";

export default function Usuario() {

    const [name, setname] = useState("catanacomics");
    const [image, setImage] = useState("/assets/img/catanacomics.svg");

    function mudarNome() {
        let novoNome = prompt("Insira seu novo nome de usuário");
        if (!novoNome) return alert("Insira um nome válido")
        setname(novoNome);
    }

    function mudarFoto() {
        let novaFoto = prompt("Insira o link da sua nova foto");
        if (!novaFoto) return alert("Insira uma foto válida");
        setImage(novaFoto);
    }

    return (

        <div className="usuario">
            <img src={image} alt="Foto de perfil do usuário" onClick={mudarFoto} className="foto-user" />
            <div className="user-info">
                <p>{name}</p>
                <span>
                    <p>Catana <button className="editar" onClick={mudarNome}><ion-icon name="pencil-outline"></ion-icon></button></p>
                </span>
            </div>
        </div>

    )

}