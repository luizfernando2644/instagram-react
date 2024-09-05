import React from "react";
import { useState } from "react";

const posts = [
    { image: "assets/img/meowed.svg", name: "meowed", post: "assets/img/gato-telefone.svg", image2: "assets/img/respondeai.svg", name2: "respondeai" },
    { image: "assets/img/barked.svg", name: "barked", post: "assets/img/dog.svg", image2: "assets/img/adorable_animals.svg", name2: "adorable_animals" }
];

export default function Posts() {

    return (
        <div>
            {posts.map((o) => <Post image={o.image} name={o.name} post={o.post} image2={o.image2} name2={o.name2} />)}
        </div>
    )
}

function Post(props) {

    function darLike() {
        if (cor === "verde") {
            setCor("vermelho")
        } else {
            setCor("verde")
        }
    }

    
    const [cor, setCor] = useState("branco");
    const [save, setSave] = useState("white");
    const [curtidas, setCurtidas] = useState(101522);

    return (
        <div className="post">
            <div className="post-up">
                <div className="user-post">
                    <img src={props.image} alt={props.name} />
                    <p>{props.name}</p>
                </div>
                <div className="options">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <div className="post-mid">
                <img src={props.post} alt={props.name} />
            </div>
            <div className="post-down">
                <div>
                    <div className="icons">
                        <div>
                            <button className={cor} onClick={darLike}>
                                <ion-icon name="heart-outline"></ion-icon>
                            </button>
                            <button>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </button>
                            <button>
                                <ion-icon name="send-outline"></ion-icon>
                            </button>
                        </div>
                        <div>
                            <button>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="curtidas">
                    <img src={props.image2} />
                    <p>Curtido por {props.name2} e outras </p>
                </div>
            </div>
        </div>
    )
}