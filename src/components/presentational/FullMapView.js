import React, {Fragment} from "react";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";


const FullMapView = ({countries, activeCountry, handleClickCountry, handleOnClosePopup, darkMode})=>{
    
    const icon = new Icon({
       iconUrl:"/marker.svg",
       iconSize:[30,30] 
    });
   
    const urlDarkMode = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
    const urlLightMode = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    return (
        <Fragment>
            <div className="ctr-full-map">
                <Map center={[0,0]} zoom={2} minZoom={2} style={{opacity:1}}>
                    
                    <TileLayer
                        url = {darkMode? urlDarkMode:urlLightMode}
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {
                        countries.map((country,index)=>{
                            let lat = country.latlng[0]!==undefined? country.latlng[0]:"";
                            let lng =  country.latlng[1]!==undefined? country.latlng[1]:"";
                            return (
                                <Marker key={`marker_${index}`}
                                    position={[lat, lng]}
                                    icon={icon}
                                    onClick={()=>{
                                        handleClickCountry(country)
                                    }}
                                    onMouseOver={()=>{
                                        handleClickCountry(country)
                                    }}
                                    
                                />    
                              
                            )
                        })

                  
                    }
                    {
                        activeCountry &&
                              (<Popup  style={{width:"auto"}}
                              position={[activeCountry.latlng[0]!==undefined? activeCountry.latlng[0]:"", activeCountry.latlng[1]!==undefined? activeCountry.latlng[1]:""]} 
                                onClose={()=>{
                                    handleOnClosePopup()
                                }}
                              > 
                              <div className="popup-box-info">
                                    <img src={activeCountry.flag}  alt="flag_img"/>
                                    <br/>
                                    <span>{activeCountry.name}</span>
                                    <details>
                                        <summary>Mas</summary>
                                        <p><strong>Capital:&nbsp;</strong>{activeCountry.capital}</p>
                                        <p><strong>Población:&nbsp;</strong>{activeCountry.population}</p>
                                        <p><strong>Región:&nbsp;</strong>{activeCountry.region}</p>
                                        <p><strong>Moneda:&nbsp;</strong>{activeCountry.currencies.map((currency)=><i>{`${currency.name}${currency.symbol!==null?`, ${currency.symbol}`:""}`}</i>)}</p>
                                        <p><strong>Idiomas:&nbsp;</strong>{activeCountry.languages.map((language)=><i>{`${language.name}, `}</i>)}</p>
                                     
                                     </details>
                              </div>
                          </Popup>)
                    }
                </Map>
            </div>
        </Fragment>
    );
}

export default FullMapView;