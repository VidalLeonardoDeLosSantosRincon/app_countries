import React, {Component, Fragment} from "react";
import {Redirect} from "react-router-dom";

//assets
import "../assets/css/pages/Map.css";

//components
import FullMap from "../components/containers/FullMap";

class Maps extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            darkMode:false
        }    
    }

    UNSAFE_componentWillMount(){
        let countriesData = localStorage.getItem("countries-data");
        if(countriesData!==null){
            countriesData = JSON.parse(countriesData);
            this.setState({
                data:countriesData
            })
        }else{
            return <Redirect to="/"/>
        }
    }


    componentDidMount(){
        this.myInteval = setInterval(()=>{
            let darkMode = localStorage.getItem("app-countries-dark-mode");
            if(darkMode!==null){
                if(darkMode==="true"){
                    this.setState({darkMode:true})
                }else if (darkMode==="false"){
                    this.setState({darkMode:false})
                }
            }else{
                localStorage.setItem("app-countries-dark-mode",false);
            }
        },10);
    }

    componentWillUnmount(){
        clearInterval(this.myInteval);
    }
    
    render(){
        const {data, darkMode} = this.state;
        return(
            <Fragment>
                <div className={darkMode?"dark-mode-ctr-map":"ctr-map"}>
                     <FullMap darkMode={darkMode} countries={data}/>
                </div>
            </Fragment>
        );
    }
}


export default Maps;