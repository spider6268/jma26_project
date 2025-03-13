import data from './data.json'
import './App.css'
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function Intro() {

    const [openIntro, setOpenInt] = React.useState(false);
    const captionsRef = React.useRef(null);
    const thumbnailsRef = React.useRef(null);
    
    const buttonStyle = {
        color:'black',
        backgroundColor: 'darkgrey',  
        padding: '10px',
        margin: '5px',
      }
      return (
        <>
        <button onClick={() => setOpenInt(true)} style={buttonStyle}>Intro</button>
    
        <
        Lightbox plugins={[Captions, Counter]}
              
              captions={{ ref: captionsRef }}
              counter={{ container: { style: { top: 25, bottom: "unset" } } }}
              on={{
                click: () => {
                  (captionsRef.current?.visible)?.();
                  (thumbnailsRef.current?.visible)?.();
                },
              }}
              open={openIntro} slides={data.Intro} close={() => setOpenInt(false)
              }
          />
            </>
            )
    
    }
    
    export default Intro