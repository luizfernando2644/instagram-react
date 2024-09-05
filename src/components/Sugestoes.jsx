import React from "react";

const sugestoes = [
    { image: "/assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", texto: "Segue você", texto_direita: "Seguir" },
    { image: "/assets/img/chibirdart.svg", name: "chibirdart", texto: "Segue você", texto_direita: "Seguir" },
    { image: "/assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", texto: "Novo no Instagram", texto_direita: "Seguir" },
    { image: "/assets/img/adorable_animals.svg", name: "adorable_animals", texto: "Segue você", texto_direita: "Seguir" },
    { image: "/assets/img/smallcutecats.svg", name: "smallcutecats", texto: "Segue você", texto_direita: "Seguir" },
];

export default function Sugestoes() {
    return (
        <div>
            <div className="upper-text">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div>
                {sugestoes.map((o) => <Perfis image={o.image} name={o.name} texto={o.texto} texto_direita={o.texto_direita}/>)}
            </div>
        </div>
    )
}

function Perfis(props) {
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
            <div className="seguir">
                <p>{props.texto_direita}</p>
            </div>
        </div>
    )
}