import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './mRuilStyle';
// bij ruilScreens kan je alle onderdelen vinden die te maken hebben met planten uploaden

const mRuil = ({ navigation }) => {
    // komt vanuit ruil
    return (
        <Container>
            <Navbar/>
            {/*listing jouw upgeloade planten*/}
            {/*bij iedere listing een pressable voor naar detail*/}
            <ButtonBox/>
            {/*1 button voor terug naar ruilkas*/}
            {/*1 button: naar mRuilCreate voor het uploaden van een nieuwe plant*/}
            <Footer/>
        </Container>
    )
};
export default mRuil;
