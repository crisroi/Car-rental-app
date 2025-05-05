import { StyleSheet } from "react-native";
import COLORS from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: COLORS.secondary,
        flex: 1,
        padding: 10
    },
    textField: {
        paddingRight: 10,
        height: 60,
        color: COLORS.black,
        borderRadius: 40,
        backgroundColor: 'white',
        marginHorizontal: 10,
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
        fontSize: 14,
        marginBottom: 35,
        // flex: 1
    },
    smallView: {
        margin: 15,
        width: 120,
        height: 161,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    smallViewBlue: {
        marginLeft: 25,
        margin: 15,
        width: 120,
        height: 161,
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        // flexDirection: 'row-reverse'
    },
    bigView: {
        height: 355,
        width: 300,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 30,
        marginBottom: 20,
        borderRadius: 35
        // boxShadow: 5
    }
    
})

export default styles;