import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../Components/Input'; 

const StartScreen = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleStart = () => {
    setEmailError('');
    setPhoneError('');
    let errors = false;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      errors = true;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please enter a valid phone number.');
      errors = true;
    }

    if (!errors) {
      // Navigate to the next screen if both inputs are valid
      // navigation.navigate('NextScreen');
    }
  };

  const handleReset = () => {
    setEmail('');
    setPhoneNumber('');
    setEmailError('');
    setPhoneError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="Email Address"
        value={email}
        onChangeText={setEmail}
        error={emailError}
        keyboardType="email-address"
      />
      <Input
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        error={phoneError}
        keyboardType="phone-pad"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.startButton]}
          onPress={handleStart}
          disabled={!email || !phoneNumber}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ACA8D3', // Background color to match the screenshot
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%', // Full width to allow for space around buttons
    marginTop: 20, // Margin at the top for spacing
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Minimum width for each button
  },
  resetButton: {
    backgroundColor: '#dbdbdb', 
  },
  startButton: {
    backgroundColor: '#4e4eb2', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

});

export default StartScreen;
