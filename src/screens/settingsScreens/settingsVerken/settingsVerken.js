import React from 'react';
import Container from '../../../components/container/container.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './settingsVerkenStyle';

const settingsVerken = ({ navigation }) => {
    // komt vanuit settings
    return (
        <Container>
            <Navbar/>
            {/*settings rondom ai*/}
            <ButtonBox/>
            {/*1 button :terug naar vorige pagina*/}
            <Footer/>
        </Container>
    )
};
export default settingsVerken;
