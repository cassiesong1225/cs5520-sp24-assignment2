import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../Components/Input'; 
import GlobalStyles from '../StyleHelper';
import PressableButton from '../Components/PressableButton';

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
        <PressableButton
          customStyle={styles.button}
          onPressFunction={handleReset}
        >
          <Text style={styles.ResetButtonText}>Reset</Text>
        </PressableButton>
        
        <PressableButton
          customStyle={[styles.button]}
          onPressFunction={handleStart}
        >
          <Text style={[disableStartHandler() ? styles.disabledText:styles.startButtonText]}>Start</Text>
        </PressableButton>
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
    backgroundColor: 'transparent',
  },
  ResetButtonText: { 
    color: '#a52a2a',
    fontSize: 18,
  },
  startButton: {
   fontSize: 18,

  }
  ,
  startButtonText: {
    color: '#8a2be2',
    fontSize: 18,
  },
   disabledText: {
     color: 'lightgray', 
      fontSize: 18,
  },

});


