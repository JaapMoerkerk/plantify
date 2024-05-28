import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './settingsAccStyle';

const settingsAcc = ({ navigation }) => {
    // komt vanuit settings
    return (
        <Container>
            <Navbar/>
            {/*naam*/}
            {/*wijk*/}
            {/*bio?*/}
            {/*contact gegevens*/}
            <ButtonBox/>
            {/*1 button :terug naar vorige pagina*/}
            <Footer/>
        </Container>
    )
};
export default settingsAcc;
