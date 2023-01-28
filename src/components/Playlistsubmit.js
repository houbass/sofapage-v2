import './Playlistsubmit.css';

//library
import { useForm } from "react-hook-form";



//import emailJs
import React, { useRef, useState } from 'react';
import emailjs, { init, send } from '@emailjs/browser';

const Playlistsubmit = (props) => {
  //funkce react hook form (kontrola polí a atd)
  const {register, handleSubmit, watch, formState: { errors }} = useForm({defaultValues: {artistName: "", email: "", text: "", track: ""}});

  //funkce na posíláni na email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_za1xlkr", "template_mdryrxo", form.current, "BpUJsAuZF7Y43-jj1")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  //error funkce
  //artist name check
  let artistNameCheck = watch("artistName").length;
  let artistNameError = "";
  let artistNameState = false;

  if(artistNameCheck === 0 ){
    artistNameError = "*artist name is mandatory"
  }
  if(artistNameCheck > 0 && artistNameCheck < 2){
    artistNameError = "*min length is 2"
  }
  if(artistNameCheck >= 20){
    artistNameError = "*max length is 20"
  }
  if(artistNameCheck >= 2 && artistNameCheck < 20){
    artistNameError =  ""
    artistNameState = true
  };
  
  //email check
  let emailCheck = watch("email");
  let emailSignCheck = emailCheck.includes("@");
  let emailError = "";
  let emailState = false;

  if(emailSignCheck === false){
    emailError = "*email is mandatory"
  }else{
    emailError = ""
    emailState = true;
  };

  //track check
  let trackCheck = watch("track");
  let trackCheckLength = trackCheck.length;
  let trackSignCheck = trackCheck.includes("spotify.com/track");
  let trackState = false;
  let trackError = "";

  if(trackCheckLength === 0){
    trackError = "*spotify link is mandatory";
  }
  if(trackCheckLength > 0 && trackSignCheck === false){
    trackError = "*this doesn't look like Spotify link mate"
  }
  if(trackSignCheck === true){
    trackError = "";
    trackState = true;
  }
  else{
  };

  //message check
  let messageCheck = watch("text").length;
  let messageError = "";
  let messageState = true;
  if(messageCheck >= 500){
    messageError = "*it's too long mate";
    messageState = false;
  }else{
  };

  //funkce na zobrazení tlačítka
  let opacityFun = 0;
  let pointerEventFun = "none";
  if(artistNameState === true && emailState === true && messageState === true && trackState === true){
    opacityFun = 1;
    pointerEventFun = "all";
  }else{
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
        maxWidth: "900px",

        padding: "10px 30px",
        borderRadius: "30px"
    }}>
      
      <div className="title">
        <h1>Submit to our Spotify playlist</h1>
      </div>

      <div className="description mt">
        <p>This form is used to submit music to our Spotify playlists. 
            Please make sure that you respect the conditions listed below before submitting otherwise it will be automatically declined.
        </p>
        <br></br>
        <div className="list">
            <ul >
                <li>Be lofi hip hop (better check our playlist to get a vibe)</li>
                <li>Be instrumental (without vocals)</li>
                <li>Be released on Spotify</li>
                <li>Be finished</li>
                <li>Submit maximum one or two tracks at once (only one track will be added)</li>
                <li>Only Spotify links are allowed</li>
            </ul>
        </div>
        <br></br>
        <p>Once you submit your track, we will listen as soon as possible and reply back within a one week (after the date you submitted it).</p>
      </div>
        <br></br>
      <form ref={form} onSubmit={sendEmail} className="form1 mt" >
        <div className="inputRow">
          <input {...register("artistName")} placeholder="Artist name" />
          <p className="error">{artistNameError}</p>
        </div>

        <div className="inputRow">
          <input {...register("email")} placeholder="Email" />
          <p className="error">{emailError}</p>
        </div>

        <div className="inputCol">
          <input {...register("track")} placeholder="Paste Spotify link to your track" />
          <p className="error">{trackError}</p>
        </div>        

        <div className="inputCol mt">
          <textarea {...register("text")} placeholder="Do you wanna say something? (max 500 characters)" rows="10" cols="50"/>
          <p className="error">{messageError}</p>
        </div>

        <div className="inputRow mb mt">
          <button style={{opacity: opacityFun, transition: "1s", pointerEvents: pointerEventFun}} className="submitButt" type="submit">
            submit
          </button>
        </div>

      </form>
    </div>
  );
}

export default Playlistsubmit;