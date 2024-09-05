import React from "react"
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"


export default function SideBar() {
    return (
        <div>
            <div>
                <Usuario />
            </div>
            <div>
                <Sugestoes />
            </div>
        </div>
    )
}