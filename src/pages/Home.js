import React, {Component, Fragment} from "react";
/*import Aos from "aos";
import "aos/dist/aos.css";*/

//import useSwr from "swr";

//assets
import "../assets/css/pages/Home.css";


//components
//import SimpleMap from "../components/containers/SimpleMap";
import FullMap from "../components/containers/FullMap";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            darkMode:false
        }

        this.handleGetData = this.handleGetData.bind(this);
    }


    UNSAFE_componentWillMount(){

        const url = "https://restcountries.eu/rest/v2/all";
        this.handleGetData(url);

    }

    async handleGetData(url){
        const req = await fetch(url);
        const data = await req.json();
        if(req.ok){
            this.setState({
                data 
            });
            localStorage.setItem("countries-data",JSON.stringify(data));   
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
                <div className={darkMode? "ctr-home dark-mode-ctr-home":"ctr-home"}>
                <FullMap countries={data} darkMode={darkMode}/>
                    {/*
                        data.map((pais,index)=>{
                            return (
                                    <SimpleMap
                                        key={`country_${index}`}
                                        lat={pais.latlng[0]!==undefined?pais.latlng[0]:""}
                                        long={pais.latlng[1]!==undefined?pais.latlng[1]:""}
                                        countryName={pais.name}
                                        flag ={pais.flag}/> 
                                
                            )
                        })
                    */}
                    
                </div>
                
            </Fragment>
        );
    }
}
export default Home;