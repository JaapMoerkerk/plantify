import React from 'react';
import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './mRuilDeleteStyle';

const mRuilDelete = ({ navigation }) => {
    // komt vanuit mRuilDetial
    return (
        <Container>
            <Navbar/>
            {/*tekst dat je je listing hebt verwijderd*/}
            {/*button voor terug naar mRuil*/}
            <Footer/>
        </Container>
    )
};
export default mRuilDelete;
