import React from "react";


const Submitpage = (props) => {

    let margin = {
                    margin: "50px",
                    background: "white",
                    width: "400px",
                    height: "180px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "20px"
                }

    return (
        <div style={{
            position: "absolute",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,        
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            maxWidth: "1000px",
            padding: "10px 30px",
            borderRadius: "30px"
            }}>

            <h1>Submit page</h1>

            <div style={{
                    display: "flex",
                    flexDirection: "row",
                    //background: "grey"      
                    }}
                >
                
                <div style={margin}>
                    <h1>Playlist submission</h1>
                    <p>submit your released music to our Spotify playlist</p>
                    <button onClick={props.playlistPage} className="btnStyle">Submit</button>
                </div>
                
                <div style={margin}>
                    <h1>Demo submission</h1>
                    <p>submit your unreleased demo to our label</p>
                    <button onClick={props.demoPage} className="btnStyle" >Submit</button>
                </div>

            </div>


        </div>
    )
};

export default Submitpage;