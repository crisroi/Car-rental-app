import { Image, Text, View } from "react-native";
import COLORS from "../constants/Colors";
import styles from "../app/styles";



const Car = ({carBrand, price, carName, engInfo, path}) => {
    return(
        <View style = {styles.bigView}>
            <View style = {{ flexDirection: 'row',justifyContent: 'space-between', paddingTop: 40,}}>
                <Text style = {{color: COLORS.black, fontFamily: 'GilroyHeavy', fontSize: 34}}>{carBrand}</Text>
                <Text style = {{color: COLORS.secondary, fontFamily: 'GilroyLight', fontSize: 34}}>{price}</Text>
            </View>

            <View style = {{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5,}}>
                <Text style = {{color: COLORS.smalltext, fontFamily: 'PoppinsRegular', fontSize: 14}}>{carName}</Text>
                <Text style = {{color: COLORS.smalltext, fontFamily: 'PoppinsRegular', fontSize: 14, textAlign: 'right'}}>/ month</Text>
            </View>

            <View style = {{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5,}}>
                <Text style = {{color: COLORS.black, fontFamily: 'PoppinsRegular', fontSize: 14}}>Engine</Text>
                <Text style = {{color: COLORS.black, fontFamily: 'PoppinsRegular', fontSize: 14, textAlign: 'right'}}>{engInfo}</Text>
            </View>

            <Image source={path} style = {{alignSelf: 'center'}}/>

        </View>
    )
}


export default Car;