import React from 'react';

import ContactBox from './contactBox/contactBox.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import styles from './ruilContactStyle';
import Footer from '../../../components/footer/footer.js';
import ContainerRed from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';

const RuilContact = ({ navigation }) => {
  return (
      <ContainerRed>
          <Navbar/>
          <ContactBox/>
          <ButtonBox/>
          <Footer/>
      </ContainerRed>
  )
};
export default RuilContact;
