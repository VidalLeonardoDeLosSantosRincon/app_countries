import React, {Fragment} from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";

const SimpleMapView = ({lat, long, countryName, flag, popup, setPopup})=>{
    
    const icon = new Icon({
       iconUrl:"/marker.svg",
       iconSize:[40,40] 
    });

    return (
        <Fragment>
           <div className="ctr-simple-map">
                <Map center={[ lat,long ]} zoom={7}>
                    
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    
                    <Marker
                        position={[lat,long]}
                        icon={icon}
                        onClick={()=>{
                            setPopup(true);
                        }}
                        onMouseOver={()=>{
                            setPopup(true);
                        }}
                        
                    />    

                    {
                        popup && (
                        <Popup 
                           position={[lat,long]}
                           onClose = {(e)=>{
                                setPopup(false)
                            }}
                        >
                            
                                    <img src={flag} width="15" height="12" style={{boder:"1px solid gray"}} alt="flag_img"/>&nbsp;
                                    <span style={{color:"orange"}}>{countryName}</span>
                        </Popup>)
                         
                    }
                </Map>
            </div>
        </Fragment>
    );
}

export default SimpleMapView;