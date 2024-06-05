import React from 'react';

import Container from '../../../components/containerRed/containerRed.js';
import Navbar from '../../../components/navbar/navbar.js';
import ContactBox from './contactBox/contactBox.js';
import ButtonBox from '../../../components/button-box/buttonBox.js';
import Footer from '../../../components/footer/footer.js';
import styles from './ruilContactStyle';
const RuilContact = ({ navigation }) => {
  return (
      <Container>
          <Navbar/>
          <ContactBox/>
          <ButtonBox/>
          <Footer/>
      </Container>
  )
};
export default RuilContact;
