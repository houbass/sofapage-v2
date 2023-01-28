import React from "react";


const Releases = (props) => {

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition
        }}>
            <h1>RELEASES PAGE</h1>
        </div>
    )
};

export default Releases;