import React from "react";
import { useState } from "react";

const sugestoes = [
    { image: "/assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", texto: "Segue você" },
    { image: "/assets/img/chibirdart.svg", name: "chibirdart", texto: "Segue você" },
    { image: "/assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", texto: "Novo no Instagram" },
    { image: "/assets/img/adorable_animals.svg", name: "adorable_animals", texto: "Segue você" },
    { image: "/assets/img/smallcutecats.svg", name: "smallcutecats", texto: "Segue você" },
];

export default function Sugestoes() {

    return (

        <div className="sugestoes1">
            <div className="upper-text">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div>
                {sugestoes.map((o) => <Perfis image={o.image} name={o.name} texto={o.texto} texto_direita={o.texto_direita} />)}
            </div>
        </div>
    )
}

function Perfis(props) {

    const [seguirTexto, setPerfil] = useState("seguir"); // alterar texto quando seguir
    const [corTexto, setCorTexto] = useState("seguir"); // alterar cor quando seguir

    function textoSeguir() {
        if (seguirTexto === "seguir") {
            setPerfil("seguindo")
            setCorTexto("seguindo")
        } else {
            setPerfil("seguir")
            setCorTexto("seguir")
        }
    }

    return (
        <div className="sugestoes">
            <div className="perfil">
                <div><img src={props.image} alt={props.name} /></div>
                <div>
                    <p>{props.name}</p>
                    <span>
                        <p>{props.texto}</p>
                    </span>
                </div>
            </div>
            <div className={corTexto}>
                <p onClick={textoSeguir}>{seguirTexto}</p>
            </div>
        </div>
    )
}