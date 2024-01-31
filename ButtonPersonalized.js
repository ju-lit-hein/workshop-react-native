import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


export default ButtonPersonalized = ({text, action}) => {
    return (
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={action}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
      }
});