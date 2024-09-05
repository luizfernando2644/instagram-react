import React from "react";
import NavBar from "./NavBar";
import StoryList from "./Stories";
import SideBar from "./SideBar";
import Posts from "./Posts";

export default function App() {
    return (
        <div>
            <div className="NavBar">
                <NavBar />
            </div>
            <div className="Body">
                <div className="left">
                    <div className="stories-box">
                        <StoryList />
                    </div>
                    <div className="posts-box">
                        <Posts />
                    </div>
                </div>
                <div className="right">
                    <div>
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}