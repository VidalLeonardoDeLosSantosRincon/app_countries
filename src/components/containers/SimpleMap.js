import React, {Fragment, useState} from "react";

//assets
import "../../assets/css/components/presentational/SimpleMap.css";

//components
import SimpleMapView from "../presentational/SimpleMapView";

const SimpleMap = ({lat, long, countryName, flag})=>{
    const [popup, setPopup] = useState(false);
    return (
        <Fragment>
           <SimpleMapView
            lat={lat}
            long={long} 
            countryName={countryName} 
            flag={flag}
            popup={popup}
            setPopup={setPopup}
           />
        </Fragment>
    );
}

export default SimpleMap;