import COLORS from "@/constants/Colors";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Textfield from '../../components/TextField';
import Car from "../../components/carInfo";
import Searchbar from "../../components/search";



const Home = () => {
    return(
        <SafeAreaView style = {{flex: 1, paddingTop: 25, backgroundColor: COLORS.bg}}>
            <ScrollView>
                <Searchbar />
                <ScrollView horizontal showsHorizontalScrollIndicator = {false} /*style = {{ paddingLeft: 15}}*/>

                    <View style = {styles.smallViewBlue}>
                        <Image source={require('../../assets/images/white-car.png')} style = {{ marginLeft: -30}} />
                        <Text style = {{color: 'white', fontFamily: 'PoppinsMedium', fontSize: 14, textAlign: 'center', paddingTop: 10}}>Standard</Text>
                        <Text style = {{color: 'white', fontFamily: 'PoppinsSemiBold', fontSize: 14, textAlign: 'center', paddingTop: 0}}>56</Text>
                    </View>

                    <View style = {styles.smallView}>
                        <Image source={require('../../assets/images/black-car.png')} style = {{marginLeft: -30}} />
                        <Text style = {{color: COLORS.black, fontFamily: 'PoppinsMedium', fontSize: 14, textAlign: 'center', paddingTop: 10}}>Prestige</Text>
                        <Text style = {{color: COLORS.smalltext, fontFamily: 'PoppinsSemiBold', fontSize: 14, textAlign: 'center', paddingTop: 0}}>22</Text>
                    </View>

                    <View style = {styles.smallView}>
                        <Image source={require('../../assets/images/white-suv.png')} style = {{marginTop: 10, marginLeft: -30}} />
                        <Text style = {{color: COLORS.black, fontFamily: 'PoppinsMedium', fontSize: 14, textAlign: 'center', paddingTop: 10}}>SUV</Text>
                        <Text style = {{color: COLORS.smalltext, fontFamily: 'PoppinsSemiBold', fontSize: 14, textAlign: 'center', paddingTop: 0}}>34</Text>
                    </View>
                    
                </ScrollView>

                <Text style = {{fontFamily: 'PoppinsRegular', fontSize: 14, color: COLORS.black, paddingLeft: 20, paddingTop: 20, paddingBottom: 10}}>Availalbe vehicles</Text>

                <Car carBrand={'Toyota'} price={'$350'} carName={'Yaris IA'} engInfo={'4-Cyl 1.5 Liter'}  path={require('../../assets/images/toyota-car.png')} />                

                <Car carBrand={'Hyundai'} price={'$250'} carName={'i20'} engInfo={'6-Cyl 1.0 Liter'} path={require('../../assets/images/hyundai.png')} />
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
