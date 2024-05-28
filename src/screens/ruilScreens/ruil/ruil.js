import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './ruilStyle';
// bij ruilScreens kan je alle onderdelen van de Ruil Kas vinden, die voorheen Marketplace heette
const ruil = ({ navigation }) => {
    // komt vanuit home of navbar
    return (
        <Container>
            <Navbar/>
            {/*listing van upgeloade planten*/}
            {/*bij iedere listing een pressable voor naar detail*/}
            <ButtonBox/>
            {/*1 button: naar mRuilCreate voor het uploaden van een nieuwe plant*/}
            <Footer/>
        </Container>
    )
};
export default ruil;
