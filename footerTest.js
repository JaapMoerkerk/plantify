import React from 'react';

import Footer from './src/components/footer/footer.js';
import ContainerRed from './src/components/containerRed/containerRed.js';
import Navbar from './src/components/navbar/navbar.js';

const FooterTest = ({ navigation }) => {
    return (
        <ContainerRed>
            <Navbar/>
            <Footer/>
        </ContainerRed>
    )
};
export default FooterTest;
