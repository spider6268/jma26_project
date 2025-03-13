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

function Bath() {

const [openBath, setOpenBath] = React.useState(false);
const captionsRef = React.useRef(null);
const thumbnailsRef = React.useRef(null);

const buttonStyle = {
    color:'black',
    backgroundColor: 'grey',  
    padding: '10px',
    margin: '5px',
  }
  return (
    <>
    <button onClick={() => setOpenBath(true)} style={buttonStyle}>Bathrooms</button>

    <
    Lightbox plugins={[Captions, Thumbnails, Counter]}
          captions={{ ref: captionsRef }}
          thumbnails={{ ref: thumbnailsRef }}
          counter={{ container: { style: { top: 25, bottom: "unset" } } }}
          on={{
            click: () => {
              (captionsRef.current?.visible)?.();
              (thumbnailsRef.current?.visible)?.();
            },
          }}
          open={openBath} slides={data.Bath} close={() => setOpenBath(false)
          }
      />
        </>
        )

}

export default Bath