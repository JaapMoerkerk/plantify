'use strict';

import { StyleSheet } from 'react-native';

const navbarStyles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#e07a5f',
       margin: 0,
       padding: 0,
     },
     nav: {
       margin: 10,
       flexDirection: 'row',
       justifyContent: 'space-between',
     },
     navItem: {
       borderRadius: 50,
       backgroundColor: 'white',
       height: '10vw',
       width: '10vw',
       justifyContent: 'center',
       alignItems: 'center',
     },
     navbarImg: {
       height: '7vw',
       width: '7vw',
     }
        });

export default navbarStyles;