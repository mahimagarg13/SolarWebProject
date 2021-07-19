import './Style.css';
import React from 'react';
import Aboutus from "./Aboutus/Aboutus"
import Action from "./Aboutus/Action"
import OurTeam from "./Aboutus/OurTeam"
import Choose from './Home/Choose';
function About() {
    return (
        <>
            <Aboutus />
            <Action />
            <OurTeam /> 
            <Choose />

        </>
    );
}
export default About;