import React, {Fragment, useState, useEffect} from "react";


//assets
import "../../assets/css/components/presentational/FullMap.css";

//components
import FullMapView from "../presentational/FullMapView";

const FullMap = ({countries, darkMode})=>{

    
    
    const [activeCountry, setActiveCountry] = useState(null);

    function handleClickCountry(country){
        setActiveCountry(country);
    }

    function handleOnClosePopup(){
        setActiveCountry(null);
    }

    useEffect(()=>{
    
          
    },[])
   
    return (
        <Fragment>
                <FullMapView 
                    countries={countries}
                    activeCountry={activeCountry}
                    setActiveCountry={setActiveCountry}
                    handleClickCountry={handleClickCountry}
                    handleOnClosePopup={handleOnClosePopup}
                    darkMode={darkMode}
                />
        </Fragment>
    );
}

export default FullMap;