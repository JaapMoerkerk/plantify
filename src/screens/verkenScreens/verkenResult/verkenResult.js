import React from 'react';
import Container from '../../../components/containerBlue/containerBlue.js';
import Navbar from '../../../components/navbar/navbar.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './verkenStyle';
// bij verkenScreens kan je alle onderdelen vinden die te maken hebben de Plantverkennert, die voorheen plantswiper heette

const verkenResult = ({ navigation }) => {
    // komt vanuit Verken
    return (
        <Container>
            <Navbar/>
            {/*aanbevolen planten:
            -in categorie envirement
            -in categorie preferences
            -in categorie care
            -ULTIEME AANRADER uit alle categorien*/}
            <Footer/>
        </Container>
    )
};
export default verken;
