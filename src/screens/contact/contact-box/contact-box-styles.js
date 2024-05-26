'use strict';

var React = require('react-native');

var contactStyles = React.StyleSheet.create({

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

   });

   export default App;
)}

module.exports = contactBoxStyles;