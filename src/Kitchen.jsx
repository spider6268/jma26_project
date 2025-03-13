import data from './data.json'
import './App.css'
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function Kitchen() {

const [openKitchen, setOpenKit] = React.useState(false);
const captionsRef = React.useRef(null);
const thumbnailsRef = React.useRef(null);
const zoomRef = React.useRef(null);

const buttonStyle = {
    color:'black',
    backgroundColor: 'grey',  
    padding: '10px',
    margin: '5px',
  }
  return (
    <>
    <button onClick={() => setOpenKit(true)} style={buttonStyle}>Kitchen</button>

    <
    Lightbox plugins={[Captions, Thumbnails, Counter, Zoom]}
          captions={{ ref: captionsRef }}
          thumbnails={{ ref: thumbnailsRef }}
          zoom={{ ref: zoomRef }}
          counter={{ container: { style: { top: 25, bottom: "unset" } } }}
          on={{
            click: () => {
              (captionsRef.current?.visible)?.();
              (thumbnailsRef.current?.visible)?.();
            },
          }}
          open={openKitchen} slides={data.Kitchen} close={() => setOpenKit(false)
          }
      />

        </>
        )

}

export default Kitchen