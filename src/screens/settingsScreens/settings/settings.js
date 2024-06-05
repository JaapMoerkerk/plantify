import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './settingsStyle';

const settings = ({ navigation }) => {
    // komt hier vanuit navbar
    return (
        <Container>
            <Navbar/>
            {/*pressable naar settings account*/}
            {/*pressable naar settings plantverkenert*/}
            <ButtonBox/>
            {/*1 button :terug naar vorige pagina*/}
            <Footer/>
        </Container>
    )
};
export default settings;
