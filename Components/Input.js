
import { Text, TextInput, View, StyleSheet } from 'react-native';
import React from "react";


const Input= ({label, value, onChangeText, error}) => {

    return (
        <View style={styles.inputContainer} >
            <Text >{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            {error && <Text style={styles.inputError}>{error}</Text>}
        </View>
    );

};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: '15%',
    },
    input: {
    backgroundColor:'#AAA8C8',
    borderColor: '#3B387E',
    borderWidth: 2,
    height: 30,
    borderRadius: 5,
    paddingLeft: 5,
    },
    inputError: {
        color: 'drak gray',
        fontSize: 15,
    },
})