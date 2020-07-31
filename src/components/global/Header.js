import React, {Fragment} from "react";

//assets
import "../../assets/css/components/global/Header.css";

const Header = ({setDarkMode})=>{
    let darkMode = localStorage.getItem("app-countries-dark-mode");
    if(darkMode!==null){
        if(darkMode==="true"){
            darkMode=true;
        }else if (darkMode==="false"){
            darkMode=false;
        }
    }
    return(
        <Fragment>
            <header className={darkMode? "header dark-mode-header":"header"}>
            <h4>CountriesApp</h4>
                <div className="dark-mode-box">
                    {
                        darkMode?
                        <input type="checkbox" onClick={setDarkMode} value={darkMode} checked/>
                            :
                        <input type="checkbox" value={darkMode} onClick={setDarkMode}/>
                            
                    }
                    {
                        console.log(darkMode)
                    }
                </div>
            </header>
        </Fragment>
    );
};

export default Header;