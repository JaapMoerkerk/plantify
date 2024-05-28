// 'use strict';
// import React from 'react';
import { StyleSheet } from 'react-native';

const contactBoxStyles = StyleSheet.create({

     main: {
       flexDirection: 'column',
       alignItems: 'center',
       width: '100%',
       margin: 0,
       padding: 0,
     },
     contactContainer: {
       width: '100%',
       alignItems: 'center',
     },
      header: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
          fontWeight: 'bold',
      },
     contactBox: {
       width: '85%',
       backgroundColor: 'white',
       borderRadius: 20,
       padding: '5%',
       margin: '5%',
       display: 'flex',
       flexDirection: 'column',
         elevation: 3,

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
         fontSize: 20,

     },
     contactAddress: {
       color: '#f0c6ba',
       fontSize: 15,
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
       height: 50,
       width: 50,
       justifyContent: 'center',
       alignItems: 'center',
       margin: 10,
     },
     contactLogo: {
       height: '70%',
       width: '70%',
     },
     contactInfo: {
       fontSize: 15,
     },

   });



export default contactBoxStyles;