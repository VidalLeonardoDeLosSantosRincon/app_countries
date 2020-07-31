import React,{Fragment} from "react";


//assets
import "../../assets/css/components/global/Footer.css";

const Footer = (props)=>{
    return(
        <Fragment>
            <footer className="footer">
                <h4>&copy; Vidal De Los Santos {new Date().getFullYear()}</h4> 
            </footer>
        </Fragment>
    );
};

export default Footer;