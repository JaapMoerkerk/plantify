import React from 'react';

import Navbar from '../../../components/navbar/navbar.js';
import ContactBox from './contactBox/contactBox.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './ruilContactStyle';
import ContainerRed from '../../../components/containerRed/containerRed.js';

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
