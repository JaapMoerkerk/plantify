'use strict';

var React = require('react-native');

var containerStyles = React.StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#e07a5f',
       fontFamily: 'Arial',
       margin: 0,
       padding: 0,
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
     }
   });

   export default App;
)}

module.exports = footerStyles;