import React from "react";
import NavBar from "./NavBar";
import StoryList from "./Stories";

export default function App() {
    return (
    <div>
        <div className="NavBar">
            <NavBar />
        </div>
        <div className="Body">
            <div>
                <div>
                    <StoryList />
                </div>
            </div>
        </div>
    </div>
    )
}