import './SesionDisplay.css'
import React from 'react';

const seasonConfig = {
    summer:{
        text:'Let\'s hit the beach!',
        iconName:'sun',
    },
    winter:{
        text:'Burr its chilly!!!',
        iconName:'snowflake',
    },
};
const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    }
    else{
       return lat > 0 ? 'winter' : 'summer';
    }
};

const SesionDisplay = (props) => {
    const season = getSeason(props.lat,new Date().getMonth());
    console.log(season);
    const {text, iconName} =seasonConfig[season];
    // const text = season === 'winter' ? 'Burr its chilly' : 'Lets hit the beach';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    return <div className = {`season-display ${season}`}>
        <i className = {`left-icon massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className = {`right-icon massive ${iconName} icon`}></i>
        
    </div>
   
};

export default SesionDisplay;