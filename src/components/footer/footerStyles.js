import { StyleSheet } from 'react-native';


const footerStyles = StyleSheet.create({

     buttonsContainer: {
         flex: 4,
         width: '100%',
       padding: '3%',
     },
     footerButton: {
       borderRadius: 10,
       height: '8%',
       borderColor: 'white',
     },
     footerButtonText: {
       color: '#143635',
     },
     footerItems: {
       width: '100%',
       justifyContent: 'center',
       backgroundColor: 'white',
       height: 80,
       flexDirection: 'row',
     },
     footerItem: {
       backgroundColor: 'gray',
       height: 60,
       width: 60,
       borderRadius: 30,
       justifyContent: 'center',
       alignItems: 'center',
       margin: '3%',
     },
     home: {
       backgroundColor: '#f0c6ba',
     },
     trade: {
       backgroundColor: '#d5e9bd',
     },
     find: {
       backgroundColor: '#c8e9e2',
     },
     collection: {
       backgroundColor: '#ffe5e5',
     },
     footerImg: {
       height: '70%',
       width: '70%',
     }
   });



export default footerStyles;