
import { StyleSheet } from 'react-native';

const navbarStyles = StyleSheet.create({

     nav: {
       margin: 10,
         height: 80,
       flexDirection: 'row',
       justifyContent: 'space-between',
     },
     navItem: {
       backgroundColor: 'white',
       height: 60,
       width: 60,
         borderRadius: 30,
         justifyContent: 'center',
       alignItems: 'center',
     },
     navbarImg: {
       height: '70%',
       width: '70%',
     }
        });

export default navbarStyles;