import {StyleSheet} from "react-native";

const buttonBoxStyles = StyleSheet.create({

buttonsContainer: {
    flex: 3,
    width: '100%',
        padding: '3%',
},
footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderRadius: 4,
    elevation: 3,
    width: '30%',
    backgroundColor: '#faf9f7',
},
footerButtonText: {
    color: '#143635',
    fontSize: 12.5,
    letterSpacing: 0.25,
},

});

export default buttonBoxStyles;