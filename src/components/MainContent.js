import React,{useState} from "react";

//imported stuffs
import "./MainContent.css";
import MainPic from "./pic/main_pic.png"

const MainContent = (props) => {

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition
        }}>
            <h1 className="header">Welcome to Sofa Lofi</h1>
            <p>The place where you can chill and pleasure your sofa with your presence</p>
            <img className="main_pic" src={MainPic} />
        </div>
    )
};

export default MainContent;