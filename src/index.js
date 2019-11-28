import React from 'react';
import ReactDOM from 'react-dom';
import SesionDisplay from './SesionDisplay';
import Spinner from './loader'


class App extends React.Component{
    // constructor(props){
    //     super(props); 
    //     //this is the only time we do direct assignment to this.state
    //     this.state = {Lat: null,errMsg: null};
    //  }
    state = {Lat: null,errMsg:null}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                //we did not assign setState direct 
                this.setState({ Lat: position.coords.latitude});
            },
            (error) => {
                this.setState({errMsg:error.message})
            }
        );
    }
    renderContent(){
        if(this.state.Lat && !this.state.errMsg){
            return <SesionDisplay lat = {this.state.Lat} />
        }

        if(!this.state.Lat && this.state.errMsg){
            return <div>ERROR: {this.state.errMsg}</div>
        }

        return <Spinner message = 'Please accept the location request' />

    }
    render(){
            return <div>{this.renderContent()}</div>
        // return <div>
        // Latitude: {this.state.Lat}
        // <br />
        // ERROR: {this.state.errMsg}
        
        // </div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
 