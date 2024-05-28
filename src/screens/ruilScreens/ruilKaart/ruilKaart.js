import React from 'react';
import Container from '../../../components/container/container.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/button-box.js';
import Footer from '../../../components/footer/footer.js';
import styles from './ruilKaartStyle';

const ruilKaart = ({ navigation }) => {
    // komt vanuit ruil
    return (
        <Container>
            <Navbar/>
            {/*kaartweergave van ruil*/}
            <Footer/>
        </Container>
    )
};
export default ruilKaart;
