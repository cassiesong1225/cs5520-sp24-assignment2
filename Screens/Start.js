import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../Components/Input'; 
import GlobalStyles from '../StyleHelper';

export default function StartScreen({ navigation}) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/
    return emailRegex.test(email);
    }

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
       navigation.navigate('AllActivities');
    }
  };

  const handleReset = () => {
    setEmail('');
    setPhoneNumber('');
    setEmailError('');
    setPhoneError('');
  };

      function disableStartHandler() {
        return email === '' && phoneNumber === ''
      }



        
    
  return (
    <SafeAreaView style={GlobalStyles.ScreenContainer}>
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
          style={styles.button}
          onPress={handleReset}
        >
          <Text style={styles.ResetButtonText}>Reset</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
          disabled={!email || !phoneNumber}
        > */}
          <Button title='Start' onPress={handleStart} disabled={disableStartHandler()}/>
        {/* </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%', 
    marginTop: 20, 
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, 
  },
  ResetButtonText: { 
    color: '#a52a2a',
    fontSize: 18,
  },
  startButton: {
   fontSize: 18,

  }

});


