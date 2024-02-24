
import { Text, TextInput, View, StyleSheet } from 'react-native';
import React from "react";
import { colors } from '../StyleHelper';


const Input= ({label, value, onChangeText, error}) => {

    return (
        <View style={styles.inputContainer} >
            <Text style={styles.label}>{label}</Text>
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
        marginBottom: 20,
    },
    input: {
    backgroundColor:colors.screenBackground,
    borderColor: colors.darkpurple,
    borderWidth: 2,
    height: 30,
    borderRadius: 5,
    paddingLeft: 5,
    },
    inputError: {
        color: 'black',
        fontSize: 15,
    },
    label: {
        fontSize: 15,
        color: colors.darkpurple,
        fontWeight: 'bold',
    },
})