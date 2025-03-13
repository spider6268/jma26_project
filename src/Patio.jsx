import data from './data.json'
import './App.css'
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";


function Patio() {

    const [openPatio, setOpenPat] = React.useState(false);
    const captionsRef = React.useRef(null);
    const thumbnailsRef = React.useRef(null);
    const slideshowRef = React.useRef(null);
    const autoplay = React.useState(true);
    const [delay, setDelay] = React.useState(5000);
    
    const buttonStyle = {
        color:'black',
        backgroundColor: 'darkgrey',  
        padding: '10px',
        margin: '5px',
      }
      return (
        <>
        <button onClick={() => setOpenPat(true)} style={buttonStyle}>Patio</button>
    
        <
        Lightbox plugins={[Captions, Counter, Thumbnails, Slideshow]}
            captions={{ ref: captionsRef }}
            counter={{ container: { style: { top: 25, bottom: "unset" } } }}
            thumbnails={{ ref: thumbnailsRef }}
            slideshow={{ autoplay, delay }}
            on={{
                click: () => {
                (captionsRef.current?.visible)?.();
                (thumbnailsRef.current?.visible)?.();
                (slideshowRef.current?.playing)?.();
                },
            }}
                open={openPatio} slides={data.Patio} close={() => setOpenPat(false)}
        />   
        </>
        )
    
    }
    
    export default Patio