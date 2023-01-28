import React from "react";




const Thanksdemo = (props) => {

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,
            display: "flex",
            flexDirection: "column"
        }}>
            <h1>Thank you for your demo submission</h1>
            <button className="btnStyle2" onClick={props.demoPage}>Submit another one</button>
            <button className="btnStyle2" onClick={props.homeFun}>homepage</button>
        </div>
    )
}

export default Thanksdemo;