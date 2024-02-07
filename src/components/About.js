import React from "react";

function About(props){
    return(
        <aside>
            { props.image === undefined || props.image === '' ?
            <img src="https://via.placeholder.com/215" alt='blog logo' /> :
            <img src={props.image} alt='blog logo' /> 
            }
            <p>{props.about}</p>
        </aside>
    );
}

export default About;