import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './mRuilDetailStyleStyle';

const mRuilDetail = ({ navigation }) => {
    // komt vanuit mRuil
    return (
        <Container>
            <Navbar/>
            {/*detail van 1 van je geuploade planten*/}
            {/*button voor update*/}
            {/*button voor delete met onPress een alert*/}
            {/*delete alert: tekst: weet je het zeker? button: nee & button ja*/}
            <ButtonBox/>
            {/*1 button voor terug naar ruilkas*/}
            <Footer/>
        </Container>
    )
};
export default mRuilDetail;
