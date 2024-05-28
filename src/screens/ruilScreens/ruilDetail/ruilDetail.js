import React from 'react';
import Container from '../../../components/container/container.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './ruilDetailStyle';

const ruilDetail = ({ navigation }) => {
    // komt vanuit ruil
    return (
        <Container>
            <Navbar/>
            {/*detail van upgeloade planten*/}
            {/*bij iedere listing een pressable voor naar contact*/}
            {/*bij iedere listing een pressable voor opslaan*/}
            <Footer/>
        </Container>
    )
};
export default ruilDetail;
