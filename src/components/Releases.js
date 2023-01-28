import React from "react";


const Releases = (props) => {

    return (
        <div style={{
            background: "white",
            position: "absolute",
            width: "1000px",
            translate: "0px 180px",
            zIndex: props.visibility,
            opacity: props.opacity,
            transition: props.transition,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px 0px 50px",
            borderRadius: "30px",
            boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
        }}>
            <h1>RELEASES PAGE</h1>
            <div className="releasesList">
                <div className="row">
                    <iframe 
                    width="250" 
                    height="250" 
                    src="https://www.youtube.com/embed/90Bi6ithZ2Q" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>

                    <iframe 
                    width="250" 
                    height="250" 
                    src="https://www.youtube.com/embed/4C478yYHT4Y" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>

                    <iframe width="250" 
                    height="250" 
                    src="https://www.youtube.com/embed/CB3ZeKAasQk" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                </div>
                <div className="row">
                    <iframe width="250" 
                    height="250" 
                    src="https://www.youtube.com/embed/lZBdkByhyvc" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>

                    <iframe width="250" 
                    height="250" 
                    src="https://www.youtube.com/embed/9l9ZNUhpB-A" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>

                    <iframe 
                    width="250" 
                    height="250" 
                    src="https://www.youtube.com/embed/z80Jssasjoc" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
};

export default Releases;