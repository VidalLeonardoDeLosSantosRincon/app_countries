import React, {Component} from 'react';
import '../assets/css/components/App.css';

//components
import Header from "../components/global/Header";
import Content from "../components/global/Content";
import Footer from "../components/global/Footer";

class App extends Component{

  constructor(props){
    super(props);
      this.state = {
        darkMode:false
      }
  }

  handleSetDarkMode = ()=>{
    this.setState((props,state)=>({
      darkMode: !this.state.darkMode
    }))
    localStorage.setItem("app-countries-dark-mode",!this.state.darkMode);
  }

  

  render(){
    const {children} = this.props;
    //const {darkMode} = this.state;
    return (
      <div className="App">
        <Header setDarkMode={this.handleSetDarkMode}/>
          <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}
export default App;
