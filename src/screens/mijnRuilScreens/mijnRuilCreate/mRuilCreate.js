import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './mRuilCreateStyle';

const mRuilCreate = ({ navigation }) => {
    // vanuit mRuil of Ruil
    return (
        <Container>
            <Navbar/>
            {/*form voor uploaden nieuwe plant*/}
            {/*foto plant*/}
            {/*soort plant / titel*/}
            {/*locatie (thuis of ergens anders)*/}
            {/*beschrijving*/}
            {/*button: create*/}
            <ButtonBox/>
            {/*1 button voor terug naar mijnRuil (afkappen van create)*/}
            <Footer/>
        </Container>
    )
};
export default mRuilCreate;
