import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/Colors';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={!isVisible}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={styles.button}>
        <Text>{isVisible ? 'Hide' : 'Show'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 40,
    marginBottom: 20
  },
  input: {
    // paddingLeft: 10,
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    flex: 1,
  },
  button: {
    paddingRight: 10,
    color: COLORS.black
  },
});

export default PasswordInput;