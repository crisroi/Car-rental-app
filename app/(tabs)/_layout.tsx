import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import COLORS from '@/constants/Colors';
// import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: COLORS.secondary, tabBarLabelStyle: {fontFamily: 'PoppinsSemiBold', fontSize: 11} }}>
      <Tabs.Screen
        name="branches"
        options={{
          title: 'Branches',
          // tabBarLabel: 'Branches',
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome name="location-arrow" size={24} color={color} onPress={() => {color = COLORS.secondary}} />,
        }}
        
      />
      <Tabs.Screen
        name="vehicles"
        options={{
          title: 'Vehicles',
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome name="car" size={24} color={color} onPress={() => {color = COLORS.secondary}}/>,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({color}) => <FontAwesome name="user" size={24} color={color} onPress={() => {color = COLORS.secondary}}/>,
        }}
      />
      
    </Tabs>
  );
}