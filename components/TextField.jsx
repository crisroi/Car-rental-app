import { TextInput } from "react-native";
// import COLORS from "../constants/Colors";
import styles from "../app/styles";
import { useState } from "react";



const Textfield = ({text, visible, placeholder, setText}) => {
    return(
    <TextInput
        placeholder= {placeholder}
        secureTextEntry = {visible}
        onChangeText={setText}
        value = {text}
        style = {styles.textField}
    />
    )
}


  


export default Textfield;


