// 'use strict';
// import React from 'react';
import { StyleSheet } from 'react-native';

const contactBoxStyles = StyleSheet.create({

     main: {
       flexDirection: 'column',
       alignItems: 'center',
       width: 100,
       margin: 0,
       padding: 0,
     },
     contactContainer: {
       width: 100,
       alignItems: 'center',
     },
      header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 2.5,
      },
     contactBox: {
       width: 70,
       backgroundColor: 'white',
       borderRadius: 10,
       padding: 20,
       margin: 50,
       display: 'flex',
       flexDirection: 'column',
     },
     userInfo: {
       borderRadius: 10,
       flexDirection: 'row',
       alignItems: 'center',
       margin: 5,
     },
     userInfoText: {
       flexDirection: 'column',
     },
     contactName: {
       color: '#e07a5f',
     },
     contactAddress: {
       color: '#f0c6ba',
       fontSize: 0.7,
     },
     contactOption: {
       backgroundColor: '#f0c6ba',
       borderRadius: 10,
       flexDirection: 'row',
       alignItems: 'center',
       margin: 5,
       padding: 2,
     },
     contactCircle: {
       borderRadius: 50,
       backgroundColor: 'white',
       height: 16,
       width: 16,
       justifyContent: 'center',
       alignItems: 'center',
       margin: 2,
     },
     contactLogo: {
       height: 10,
       width: 10,
     },
     contactInfo: {
       fontSize: 0.9,
     },

   });



export default contactBoxStyles;