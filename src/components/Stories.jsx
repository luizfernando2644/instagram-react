import React from "react"

const storie = [
    { name: "9gag", image: "assets/img/9gag.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "meowed", image: "assets/img/meowed.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "barked", image: "assets/img/barked.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "nathanwp...", image: "assets/img/nathanwpylestrangeplanet.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "wawawic...", image: "assets/img/wawawicomics.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "respondeai", image: "assets/img/respondeai.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "filomoderna", image: "assets/img/filomoderna.svg", fundo: "assets/img/stories_background.jpg" },
    { name: "memeriag...", image: "assets/img/memeriagourmet.svg", fundo: "assets/img/stories_background.jpg" },
]

export default function Stories() {
    return (
        <div className="stories">
            {storie.map((s) => <Story name={s.name} image={s.image} fundo={s.fundo} />)}
        </div>
    )
}

function Story(props) {
    return (
        <div className="story">
            <div>
                <img src={props.image} alt={props.name} className="imagem" />
                <img src={props.fundo} className="fundo" />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}