import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ButtonPersonalized from './ButtonPersonalized';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



function printBonjour () {
  console.log("Bonjour")
}

export default View2 = ({navigation}) => {


  const [value, onChangeValue] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Écran 2</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeValue(text)}
        value={value}
        placeholder='This is a text field.'
      />
      <ButtonPersonalized text={"retour"} action={() => {navigation.navigate('view1')}}/>
    </View>
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
