import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './mRuilUpdateStyleStyle';

const mRuilUpdate = ({ navigation }) => {
    // komt vanuit mRuilDetail
    return (
        <Container>
            <Navbar/>
            {/*form voor updaten plant*/}
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
export default mRuilUpdate;
