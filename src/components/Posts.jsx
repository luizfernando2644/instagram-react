import React from "react";
import { useState } from "react";

const posts = [
    { image: "assets/img/meowed.svg", name: "meowed", post: "assets/img/gato-telefone.svg", image2: "assets/img/respondeai.svg", name2: "respondeai", likes: 101523 },
    { image: "assets/img/barked.svg", name: "barked", post: "assets/img/dog.svg", image2: "assets/img/adorable_animals.svg", name2: "adorable_animals", likes: 200541 }
];

export default function Posts() {

    return (
        <div>
            {posts.map((o) => <Post image={o.image} name={o.name} post={o.post} image2={o.image2} name2={o.name2} likes={o.likes} />)}
        </div>
    )
}

function Post(props) {

    const [cor, setCor] = useState("heart-outline");
    const [corIcone, setCorIcone] = useState("black");
    const [naoSalvo, setNaoSalvo] = useState("bookmark-outline");
    const [likes, setLike] = useState(props.likes);

    function darLike() {
        if (cor === "heart-outline") {
            setCor("heart")
            setCorIcone("red")
            setLike(likes + 1)
        } else {
            setCor("heart-outline")
            setCorIcone("black")
            setLike(likes - 1)
        }
    }

    function salvarPost() {
        if (naoSalvo === "bookmark-outline") {
            setNaoSalvo("bookmark")
        } else {
            setNaoSalvo("bookmark-outline")
        }
    }

    return (
        <div className="post">
            <div className="post-up">
                <div className="user-post">
                    <img src={props.image} alt={props.name} />
                    <p>{props.name}</p>
                </div>
                <div className="options">
                    {<ion-icon name="ellipsis-horizontal-outline"></ion-icon>}
                </div>
            </div>
            <div className="post-mid">
                <img src={props.post} alt={props.name} />
            </div>
            <div className="post-down">
                <div>
                    <div className="icons">
                        <div>
                            <button onClick={darLike}>
                                <ion-icon name={cor} style={{ color: corIcone }}></ion-icon>
                            </button>
                            <button>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </button>
                            <button>
                                <ion-icon name="send-outline"></ion-icon>
                            </button>
                        </div>
                        <div>
                            <button onClick={salvarPost}>
                                <ion-icon name={naoSalvo}></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.image2} alt="Imagem" />
                    <p>Curtido por <span style={{ fontWeight: 'bolder' }}>{props.name2}</span> e outras <span style={{ fontWeight: 'bolder' }}>{likes}</span> pessoas</p>
                </div>
            </div>
        </div>
    )
}