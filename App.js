import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ButtonPersonalized from './ButtonPersonalized';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import View1 from './View1';
import View2 from './View2';



function printBonjour () {
  console.log("Bonjour")
}

const Stack = createNativeStackNavigator();


export default function App() {

  const [value, onChangeValue] = React.useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="view2" component={View2} />
        <Stack.Screen
          name="view1"
          component={View1}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    height: 40,
    width: 400 ,
    borderColor: '#09deca',
    borderWidth: 2,
    backgroundColor: '#09deca77',
    borderRadius: 10
  },
  touchableOpacity: {
    height: 60,
    width: 60,
    borderColor: '#000000',
    borderWidth: 2,
    backgroundColor: '#ff000077',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  text: {
    fontWeight: "900",
    marginBottom: 10
  }

});
