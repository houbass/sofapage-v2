import React, { useTransition } from "react";

//imported stuffs
import './Menu.css';
import menuLogo from "./pic/menu_logo.png";



const Menu = (props) => {

    return (
        <div className="menu">

            <div className="left">
                <img onClick={props.homeClick} className="menu_logo" src={menuLogo} alt="" />
            </div>


            <div className="right">



                <div className="btn">
                    <button 
                    onClick={props.releasesClick}
                    style={{
                        scale: props.relfontsize,
                        transition: "1s ease-out"
                    }}>
                        releases
                    </button>
                </div>



                <div className="btn">
                    <button 
                    onClick={props.submitClick} 
                    style={{
                        scale: props.subfontsize,
                        transition: "1s ease-out"
                    }}>
                        submit music
                    </button>
                </div>



                <div className="btn">
                    <button 
                    onClick={props.contactClick}
                    style={{
                        scale: props.contfontsize,
                        transition: "1s ease-out"
                    }}>
                        contact</button>
                </div>



            </div>
        </div>
    )
};



export default Menu;