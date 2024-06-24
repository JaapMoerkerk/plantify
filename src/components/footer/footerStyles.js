import { StyleSheet } from 'react-native';


const footerStyles = StyleSheet.create({

    footerItems: {
        width: '100%',
        justifyContent: 'center',
        borderTopColor: 'white',
        borderTopWidth: 1,
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
        backgroundColor: '#ffe5e5',
    },
    trade: {
        backgroundColor: '#f0c6ba',
    },
    find: {
        backgroundColor: '#d5e9bd',
    },
    collection: {
        backgroundColor: '#c8e9e2',
    },
    footerImg: {
        height: '70%',
        width: '70%',
    }
});



export default footerStyles;