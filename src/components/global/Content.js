import React,{Fragment} from "react";


//assets
import "../../assets/css/components/global/Content.css";

const Content = ({body})=>{
    return(
        <Fragment>
            <div className="ctr-content">
                {body}
            </div>
        </Fragment>
    );
};

export default Content;