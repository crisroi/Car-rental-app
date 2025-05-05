import { useState } from "react";
import { TextInput } from "react-native";
import styles from "../app/styles";



const App = () => {
    const [text, setText] = useState('');
  
    return (
    //   <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter text here"
          value={text}
          onChangeText={setText}
        />
    );
  };


export default App