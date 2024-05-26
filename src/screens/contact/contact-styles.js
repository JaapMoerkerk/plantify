'use strict';

var React = require('react-native');

var contactStyles = React.StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#e07a5f',
       fontFamily: 'Arial',
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
     },
     main: {
       flexDirection: 'column',
       alignItems: 'center',
       width: '100vw',
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
       fontSize: '2.5em',
     },
     contactBox: {
       width: '70vw',
       backgroundColor: 'white',
       borderRadius: 10,
       padding: 20,
       margin: '50px auto',
       maxHeight: 'calc(100vh - 300px)',
       overflow: 'auto',
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
       fontSize: '0.7em',
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
       height: '16vw',
       width: '16vw',
       justifyContent: 'center',
       alignItems: 'center',
       margin: '2vw',
     },
     contactLogo: {
       height: '10vw',
       width: '10vw',
     },
     contactInfo: {
       fontSize: '0.9em',
     },
     footer: {
       position: 'fixed',
       bottom: 0,
       width: '100%',
       flexDirection: 'column',
     },
     buttonsContainer: {
       width: '100%',
       padding: '3vw',
     },
     footerButton: {
       borderRadius: 10,
       height: '8vw',
       justifyContent: 'center',
       alignItems: 'center',
       borderColor: 'white',
       marginRight: 'auto',
       paddingHorizontal: '2vw',
     },
     footerButtonText: {
       color: '#143635',
     },
     footerItems: {
       width: '100%',
       justifyContent: 'center',
       backgroundColor: 'white',
       height: '22vw',
       flexDirection: 'row',
     },
     footerItem: {
       backgroundColor: 'gray',
       height: '16vw',
       width: '16vw',
       borderRadius: 10,
       justifyContent: 'center',
       alignItems: 'center',
       margin: '3vw',
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
       height: '10vw',
       width: '10vw',
     },
   });

   export default App;
)}

module.exports = contactStyles;