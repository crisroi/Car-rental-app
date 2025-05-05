import {Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import COLORS from '../constants/Colors';
import Textfield from '../components/TextField';
import PasswordInput from '../components/PasswordField';
import Button from '../components/button';
import { useState } from 'react';
import { router, useRouter } from 'expo-router';



export default function Login() {
    const [text, setText] = useState('')
    return(
        <ImageBackground source={require('../assets/images/bg-image.png')} style = {{flex: 1, backgroundColor: COLORS.secondary, /*paddingTop: 20*/}} resizeMode = 'contain'>
            <View style = {styles.container}>
                <Image source={require('../assets/images/logo.png')} style = {{alignSelf: 'center', marginTop: 50}} />
                <Image source={require('../assets/images/text.png')} style = {{alignSelf: 'center', marginTop: 20, marginBottom: 55}} />
                <Textfield placeholder = {'Enter Username'} text={text} setText={setText} />
                <PasswordInput />  
                <Text style = {{textAlign: 'center', color: 'white', fontFamily: 'PoppinsRegular', fontSize: 14}}>Forgot Password?</Text>   
                <Button action={()=> router.push('./(tabs)/vehicles')} />       
            </View>
        </ImageBackground>
    )
}
