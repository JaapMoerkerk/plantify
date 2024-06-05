import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './favStyle';

const fav = ({ navigation }) => {
    // komt hier vanuit navbar
    return (
        <Container>
            <Navbar/>
            {/*favorites content*/}
            <ButtonBox/>
            {/*1 button :terug naar vorige pagina*/}
            <Footer/>
        </Container>
    )
};
export default fav;
