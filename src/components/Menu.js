import React from "react";

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
                        fontSize: props.relfontsize
                    }}>
                        releases
                    </button>
                </div>



                <div className="btn">
                    <button 
                    onClick={props.submitClick} 
                    style={{
                        fontSize: props.subfontsize
                    }}>
                        submit music
                    </button>
                </div>



                <div className="btn">
                    <button 
                    onClick={props.contactClick}
                    style={{
                        fontSize: props.contfontsize
                    }}>
                        contact</button>
                </div>



            </div>
        </div>
    )
};



export default Menu;